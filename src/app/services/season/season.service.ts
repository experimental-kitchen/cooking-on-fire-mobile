import {Injectable} from '@angular/core';
import {PlanDefinition} from 'fhir/r4';
import {TopicDecoderService} from '../topic-decoder/topic-decoder.service';
import {CodeSystem} from '../topic-decoder/CodeSystem';

@Injectable()
export class SeasonService {

  private readonly _currentDate = new Date();


  get currentDate(): Date {
    return this._currentDate;
  }

  constructor(private topicDecoderService: TopicDecoderService) {
  }

  isInSeason(planDefinition: PlanDefinition): boolean {
    const season = this.topicDecoderService.getCode(planDefinition, CodeSystem.cofSeason)[0];
    return new SeasonMapper().isDateInSeason(this.currentDate, season);
  }
}

export class SeasonMapper {

  private readonly seasons = new Map<string, [Date, Date]>();

  constructor() {
  }

  public isDateInSeason(actualDate: Date, season: string): boolean {
    if (season === 'all-season') {
      return true;
    }
    return this.isDateInSeasonRange(actualDate, season);
  }

  private isDateInSeasonRange(actualDate: Date, season: string): boolean {
    this.determineSeasonsbyActual(actualDate);
    const seasonRange = this.seasons.get(season);
    return actualDate >= seasonRange[0] && actualDate <= seasonRange[1];
  }

  private determineSeasonsbyActual(date: Date) {
    const currentYear = date.getFullYear();
    this.seasons.set('spring', [new Date(currentYear, 2, 1), new Date(currentYear, 4, 31, 23, 59, 59, 999)]);
    this.seasons.set('summer', [new Date(currentYear, 5, 1), new Date(currentYear, 7, 31, 23, 59, 59, 999)]);
    this.seasons.set('autumn', [new Date(currentYear, 8, 1), new Date(currentYear, 10, 30, 23, 59, 59, 999)]);
    this.determineWinterByActualMonth(date);
  }

  private determineWinterByActualMonth(date: Date) {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    if (currentMonth >= 0 && currentMonth < 2) {
      this.seasons.set('winter', [new Date(currentYear, 0, 1), new Date(currentYear + 1, 2, 0, 23, 59, 59, 999)]);
    } else {
      this.seasons.set('winter', [new Date(currentYear, 11, 1), new Date(currentYear + 1, 11, 31, 23, 59, 59, 999)]);
    }
  }
}
