import {Ingredient, Unit} from '../../model/recipe';
import {SubstanceIngredient} from 'fhir/r4';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientMapperService {
  convert(ingredient: SubstanceIngredient): Ingredient {
    return new Ingredient.Builder()
      .withProductId(ingredient.id)
      .withName(this.name(ingredient))
      .withAmount(this.amount(ingredient))
      .withPortions(this.portions(ingredient))
      .withUnit(this.unit(ingredient))
      .withComment(this.comment(ingredient))
      .build();
  }

  private unit(ingredient: SubstanceIngredient): Unit {
    const abbreviation = ingredient.quantity?.numerator?.code;
    const name = ingredient.quantity?.numerator?.unit;
    return abbreviation != undefined && name != undefined ?
      new Unit(abbreviation, name) : null;
  }


  private name(ingredient: SubstanceIngredient): string {
    return ingredient.substanceCodeableConcept?.text;
  }

  private amount(ingredient: SubstanceIngredient): number {
    return ingredient.quantity?.numerator?.value
  }

  private portions(ingredient: SubstanceIngredient): number {
    return ingredient.quantity?.denominator?.value
  }

  private comment(ingredient: SubstanceIngredient): string {
    const comment = ingredient.substanceCodeableConcept?.extension?.find(ext => ext.url === 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment');
    return comment?.valueString;
  };
}
