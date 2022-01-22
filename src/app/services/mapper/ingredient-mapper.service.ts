import {Injectable} from '@angular/core';
import {Converter, Mapper} from 'typevert';
import {Ingredient} from '../../model/recipe';
import {Unit} from '../../model/unit';
import {CodeableConcept, Quantity, Ratio, SubstanceIngredient} from 'fhir/r4';

export class CoFSubstanceIngredient implements SubstanceIngredient {
  id?: string;
  quantity?: CoFRatio;
  substanceCodeableConcept?: CodeableConcept;
}

@Injectable({
  providedIn: 'root'
})
@Mapper({sourceType: CoFSubstanceIngredient, targetType: Ingredient}, [
  {
    source: 'quantity',
    target: 'unit',
    expr: quantity => quantity?.numerator?.unit !== undefined ? Unit[quantity.numerator.unit.toLowerCase()] : null
  },
  {source: 'substanceCodeableConcept', target: 'name', expr: cc => cc?.text},
  {source: 'quantity', target: 'amount', expr: quantity => quantity?.numerator?.value},
  {source: 'quantity', target: 'portions', expr: quantity => quantity?.denominator?.value},
  {source: 'substanceCodeableConcept', target: 'comment', expr: cc => extractComment(cc)}
])
export class IngredientMapperService extends Converter<CoFSubstanceIngredient, Ingredient> {

}

const extractComment = (codeableConcept: CodeableConcept) => {
  const comment = codeableConcept?.extension?.find(ext => ext.url === 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment');
  return comment?.valueString;
};

export class CoFCodeableConcept implements CodeableConcept {
  text?: string;
}

export class CoFQuantity implements Quantity {
  unit?: string;
  value?: number;
}

export class CoFRatio implements Ratio {
  denominator?: CoFQuantity;
  numerator?: CoFQuantity;
}
