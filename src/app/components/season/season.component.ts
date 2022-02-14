import {Component, Input, OnInit} from '@angular/core';
import {Season, SeasonService} from '../../services/season/season.service';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss'],
  providers: [SeasonService]
})
export class SeasonComponent implements OnInit {

  @Input()
  recipe: Recipe;

  season = Season;

  constructor(public seasonService: SeasonService) {
  }

  isInSeason(): boolean {
    return this.seasonService.isInSeason(this.recipe);
  }

  ngOnInit() {
  }

}
