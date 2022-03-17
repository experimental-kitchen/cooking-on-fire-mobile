import {TestBed} from '@angular/core/testing';

import {RecipeMapperService} from './recipe-mapper.service';

describe('RecipeMapperService', () => {
  let service: RecipeMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
