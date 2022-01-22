import {Component, Input, OnInit} from '@angular/core';
import {PlanDefinition} from 'fhir/r4';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {

  @Input()
  planDefinition: PlanDefinition;

  constructor() {
  }

  ngOnInit() {
  }

}


