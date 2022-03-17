import {TestBed} from '@angular/core/testing';

import {SeasonService} from './season.service';
import {Recipe} from '../../model/recipe';
import createSpyObj = jasmine.createSpyObj;

describe('SeasonService', () => {
  let service: SeasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeasonService]
    });
    service = TestBed.inject(SeasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('recipe is at the begin of spring', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 2, 1));
    expect(service.isInSeason(recipeSpring)).toBeTrue();
  });

  it('recipe is at the end of spring', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 4, 31, 23, 59, 59, 999));
    expect(service.isInSeason(recipeSpring)).toBeTrue();
  });

  it('recipe is at the begin of summer', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 5, 1));
    expect(service.isInSeason(recipeSummer)).toBeTrue();
  });

  it('recipe is at the end of summer', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 7, 31, 23, 59, 59, 999));
    expect(service.isInSeason(recipeSummer)).toBeTrue();
  });

  it('recipe is at the begin of autumn', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 8, 1));
    expect(service.isInSeason(recipeAutumn)).toBeTrue();
  });

  it('recipe is at the end of autumn', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 10, 30, 23, 59, 59, 999));
    expect(service.isInSeason(recipeAutumn)).toBeTrue();
  });

  it('recipe is at the begin of winter', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 0, 1));
    expect(service.isInSeason(recipeWinter)).toBeTrue();
  });

  it('recipe is at the end of winter', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 11, 31, 23, 59, 59, 999));
    expect(service.isInSeason(recipeWinter)).toBeTrue();
  });

  it('recipe is in all seasons', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 11, 31, 23, 59, 59, 999));
    expect(service.isInSeason(recipeAllSeason)).toBeTrue();
  });

  it('recipe is in winter on last day of winter on a leap year ', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2024, 1, 29, 23, 59, 59, 999));
    expect(service.isInSeason(recipeWinter)).toBeTrue();
  });
});

const recipeWinter = createSpyObj<Recipe>('recipe', {}, {
  seasons: ['winter']
});

const recipeAutumn = createSpyObj<Recipe>('recipe', {}, {
  seasons: ['autumn']
});
const recipeSummer = createSpyObj<Recipe>('recipe', {}, {
  seasons: ['summer']
});

const recipeSpring = createSpyObj<Recipe>('recipe', {}, {
  seasons: ['spring']
});

const recipeAllSeason = createSpyObj<Recipe>('recipe', {}, {
  seasons: ['all-season']
});

