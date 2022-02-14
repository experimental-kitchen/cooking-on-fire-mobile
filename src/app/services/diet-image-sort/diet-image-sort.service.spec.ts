import {TestBed} from '@angular/core/testing';

import {DietImageSortService} from './diet-image-sort.service';
import {Diet} from '../../model/recipe';

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
    const a = new Diet('pesce', 'Fisch');
    const b = new Diet('lactose-free', 'laktosefrei');
    expect(service.sort(a, b)).toBeGreaterThan(0);
  });

  it('vegan should be after vegetarian', () => {
    expect(service.sort('vegetarian', 'vegan')).toBeLessThan(0);
    expect(service.sort({code: 'vegetarian', display: 'vegetarisch'}, {
      code: 'vegan',
      display: 'vegan'
    })).toBeLessThan(0);
  });

  it('something undefined should not be sorted', () => {
    expect(service.sort('unknown', 'vegan')).toBe(0);
    expect(service.sort({code: 'unknown', display: 'unknown'}, {code: 'vegan', display: 'vegan'})).toBe(0);
  });

  it('something undefined should not be sorted either way', () => {
    expect(service.sort('vegetarian', 'unknown')).toBe(0);
    expect(service.sort({code: 'vegetarian', display: 'vegetarisch'}, {code: 'unknown', display: 'unknown'})).toBe(0);
  });

  it('both undefined should not be sorted', () => {
    expect(service.sort({code: 'unknown', display: 'unknown'}, {code: 'unknown', display: 'unknown'})).toBe(0);
  });
});
