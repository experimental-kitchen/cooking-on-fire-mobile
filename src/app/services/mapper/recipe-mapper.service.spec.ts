import {TestBed} from '@angular/core/testing';

import {RecipeMapperService} from './recipe-mapper.service';
import {PlanDefinition} from 'fhir/r4';
import {readAndParseJson} from '@angular/cli/utilities/json-file';
import {Recipe} from '../../model/recipe';

describe('RecipeMapperService', () => {
  let service: RecipeMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('PlanDefinition is mapped to Recipe', () => {
    const given: PlanDefinition = readAndParseJson('plan-definition.json');
    const expected: Recipe = readAndParseJson('');
    console.log(given);
    expect(service.convert(given))
      .toEqual(expected);
  });
});
