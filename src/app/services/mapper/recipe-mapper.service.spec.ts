import {TestBed} from '@angular/core/testing';

import {RecipeMapperService} from './recipe-mapper.service';
import * as given from '../../../assets/stubs/plan-definition.json';
import * as expected from '../../../assets/stubs/recipe.json';

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
    expect(service.convert(given))
      .toEqual(expected);
  });
});
