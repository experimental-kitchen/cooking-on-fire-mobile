import {TestBed} from '@angular/core/testing';

import {DietImageSortService} from './diet-image-sort.service';

describe('DietImageSortService', () => {
  let service: DietImageSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietImageSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('lactose-free should be before pesce', () => {
    expect(service.sort('pesce', 'lactose-free')).toBeGreaterThan(0);
  });

  it('vegan should be after vegetarian', () => {
    expect(service.sort('vegetarian', 'vegan')).toBeLessThan(0);
  });

  it('vegan should be after vegetarian', () => {
    expect(service.sort('vegetarian', 'vegan')).toBeLessThan(0);
  });

  it('something undefined should not be sorted', () => {
    expect(service.sort('unknown', 'vegan')).toBe(0);
  });

  it('something undefined should not be sorted either way', () => {
    expect(service.sort('vegetarian', 'unknown')).toBe(0);
  });

  it('both undefined should not be sorted', () => {
    expect(service.sort('vegetarian', 'unknown')).toBe(0);
  });
});
