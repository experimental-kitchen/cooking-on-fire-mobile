import { TestBed } from '@angular/core/testing';

import { Substance2IngredientsMapperService } from './substance2-ingredients-mapper.service';

describe('Substance2IngredientsMapperService', () => {
  let service: Substance2IngredientsMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Substance2IngredientsMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
