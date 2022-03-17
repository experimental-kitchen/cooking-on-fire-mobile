import {Component, Input} from '@angular/core';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['../../app.component.scss', './recipes-list-item.component.scss'],
})
export class RecipesListItemComponent {
  @Input()
  recipe: Recipe;
}
