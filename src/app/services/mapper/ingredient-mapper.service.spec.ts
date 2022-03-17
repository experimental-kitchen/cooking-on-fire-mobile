import {TestBed} from '@angular/core/testing';

import {IngredientMapperService} from './ingredient-mapper.service';
import {SubstanceIngredient} from 'fhir/r4';
import {Ingredient} from '../../model/recipe';

describe('IngredientMapperService', () => {
  let service: IngredientMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SubstanceIngredient is mapped to Ingredient', () => {
    const ingredient: SubstanceIngredient = {
      quantity: {
        numerator: {
          value: 1
        },
        denominator: {
          value: 2,
          unit: 'Portion(en)',
          system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
          code: 'Portion(en)'
        }
      },
      substanceCodeableConcept: {
        extension: [
          {
            url: 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
            valueString: '(ca. 25 x 48 cm)'
          }
        ],
        text: 'ausgewallter Kuchenteig rechteckig'
      }
    };

    expect(service.convert(ingredient))
      .toEqual(
        new Ingredient.Builder()
          .withName('ausgewallter Kuchenteig rechteckig')
          .withAmount(1)
          .withPortions(2)
          .withComment('(ca. 25 x 48 cm)')
          .withUnit(null)
          .build()
      );
  });
});
