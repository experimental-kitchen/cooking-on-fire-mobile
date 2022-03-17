import {Injectable} from '@angular/core';
import {Substance} from 'fhir/r4';
import {Ingredient} from '../../model/recipe';
import {IngredientMapperService} from './ingredient-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class Substance2IngredientsMapperService {
  constructor(private ingredientMapper: IngredientMapperService) {
  }

  convert(substance: Substance): Ingredient[] {
    return substance.ingredient.map(ingredient => {
      const ingr = this.ingredientMapper.convert(ingredient);
      ingr.productId = substance.id;
      return ingr;
    });
  }
}
