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
    const a = new Diet('vegetarian', 'vegan');
    const b = new Diet('vegetarian', 'vegetarisch');
    expect(service.sort(a, b)).toBeLessThan(0);
  });

  it('something undefined should not be sorted', () => {
    const a = new Diet('vegan', 'vegan');
    const b = new Diet('unknown', 'unknown');
    expect(service.sort(a, b)).toBe(0);
  });

  it('something undefined should not be sorted either way', () => {
    const a = new Diet('vegetarian', 'vegetarisch');
    const b = new Diet('unknown', 'unknown');
    expect(service.sort(a, b)).toBe(0);
  });

  it('both undefined should not be sorted', () => {
    const a = new Diet('unknown', 'unknown');
    const b = new Diet('unknown', 'unknown');
    expect(service.sort(a, b)).toBe(0);
  });
});
