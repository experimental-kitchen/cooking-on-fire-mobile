import {Component, Input, OnInit} from '@angular/core';
import {PlanDefinition} from 'fhir/r4';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-recipe-image-or-placeholder',
  templateUrl: './recipe-image-or-placeholder.component.html',
  styleUrls: ['./recipe-image-or-placeholder.component.scss'],
})
export class RecipeImageOrPlaceholderComponent {

  @Input()
  recipe: Recipe;
}
