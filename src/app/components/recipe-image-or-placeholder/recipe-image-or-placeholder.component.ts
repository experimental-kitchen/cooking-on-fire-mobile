import {Component, Input, OnInit} from '@angular/core';
import {PlanDefinition} from 'fhir/r4';

@Component({
  selector: 'app-recipe-image-or-placeholder',
  templateUrl: './recipe-image-or-placeholder.component.html',
  styleUrls: ['./recipe-image-or-placeholder.component.scss'],
})
export class RecipeImageOrPlaceholderComponent implements OnInit {

  @Input()
  planDefinition: PlanDefinition;

  constructor() {
  }

  ngOnInit() {
  }

  image(planDefinition: PlanDefinition): string {
    if (!planDefinition || !planDefinition.relatedArtifact || !planDefinition.relatedArtifact[0]) {
      return null;
    }
    return planDefinition.relatedArtifact[0].url;
  }

}
