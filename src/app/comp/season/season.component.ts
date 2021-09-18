import {Component, Input, OnInit} from '@angular/core';
import {Season, SeasonService} from '../../services/season/season.service';
import {PlanDefinition} from 'fhir/r4';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss'],
  providers: [SeasonService]
})
export class SeasonComponent implements OnInit {

  @Input()
  planDefinition: PlanDefinition;

  season = Season;

  constructor(public seasonService: SeasonService) { }

  isInSeason(): boolean {
    return this.seasonService.isInSeason(this.planDefinition);
  }

  ngOnInit() {}

}
