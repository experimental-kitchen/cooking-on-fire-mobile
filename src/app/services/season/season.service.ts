import {Injectable} from '@angular/core';
import {PlanDefinition} from 'fhir/r4';
import {TopicDecoderService} from '../topic-decoder/topic-decoder.service';
import {CodeSystem} from '../topic-decoder/code-system';

@Injectable()
export class SeasonService {

  private readonly _currentDate = new Date();
  private readonly seasonMapper: SeasonMapper;

  get currentDate(): Date {
    return this._currentDate;
  }

  constructor(private topicDecoderService: TopicDecoderService) {
    this.seasonMapper = new SeasonMapper();
  }

  isInSeason(planDefinition: PlanDefinition): boolean {
    const seasonsOfRecipe = this.topicDecoderService.getCode(planDefinition, CodeSystem.cofSeason);
    return seasonsOfRecipe.find(seasonOfRecipe =>
      this.seasonMapper.isDateInSeason(this.currentDate, Season[seasonOfRecipe])
    ) !== undefined;
  }

  actualSeasonImage(): string {
    const actualSeason = this.seasonMapper.actualSeason(this.currentDate);
    return Season2ImagePathMapper.map(actualSeason);
  }
}

export class SeasonMapper {

  private readonly seasons = new Map<Season, [Date, Date]>();

  constructor() {
  }

  public actualSeason(actualDate: Date): Season {
    let s;
    this.seasons.forEach((seasonRange, season) => {
      if (actualDate >= seasonRange[0] && actualDate <= seasonRange[1]) {
        s = season;
      }
    });
    return s;
  }

  public isDateInSeason(actualDate: Date, season: Season): boolean {
    if (season === Season['all-season']) {
      return true;
    }
    return this.isDateInSeasonRange(actualDate, season);
  }

  private isDateInSeasonRange(actualDate: Date, season: Season): boolean {
    this.configureSeasonsbyActual(actualDate);
    const seasonRange = this.seasons.get(season);
    return actualDate >= seasonRange[0] && actualDate <= seasonRange[1];
  }

  private configureSeasonsbyActual(date: Date) {
    const currentYear = date.getFullYear();
    this.seasons.set(Season.spring, [new Date(currentYear, 2, 1), new Date(currentYear, 4, 31, 23, 59, 59, 999)]);
    this.seasons.set(Season.summer, [new Date(currentYear, 5, 1), new Date(currentYear, 7, 31, 23, 59, 59, 999)]);
    this.seasons.set(Season.autumn, [new Date(currentYear, 8, 1), new Date(currentYear, 10, 30, 23, 59, 59, 999)]);
    this.determineWinterByActualMonth(date);
  }

  private determineWinterByActualMonth(date: Date) {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    if (currentMonth >= 0 && currentMonth < 2) {
      this.seasons.set(Season.winter, [new Date(currentYear, 0, 1), new Date(currentYear + 1, 2, 0, 23, 59, 59, 999)]);
    } else {
      this.seasons.set(Season.winter, [new Date(currentYear, 11, 1), new Date(currentYear + 1, 11, 31, 23, 59, 59, 999)]);
    }
  }
}

export class Season2ImagePathMapper {
  static map(season: Season) {
    switch (season) {
      case Season.spring:
        return 'assets/icons/spring.svg';
      case Season.summer:
        return 'assets/icons/summmer.svg';
      case Season.autumn:
        return 'assets/icons/fall.svg';
      case Season.winter:
        return 'assets/icons/winter.svg';
    }
  }
}

export enum Season {
  spring = 'spring', summer = 'summer', autumn = 'autumn', winter = 'winter', 'all-season' = 'all-season'
}
