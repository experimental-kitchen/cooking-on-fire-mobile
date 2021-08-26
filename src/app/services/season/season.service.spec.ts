import {TestBed} from '@angular/core/testing';

import {SeasonService} from './season.service';
import {PlanDefinition} from 'fhir/r4';
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

  it('plandefinition is at the begin of spring', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 2, 1));
    expect(service.isInSeason(planDefinitionSpring)).toBeTrue();
  });

  it('plandefinition is at the end of spring', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 4, 31, 23, 59, 59, 999));
    expect(service.isInSeason(planDefinitionSpring)).toBeTrue();
  });

  it('plandefinition is at the begin of summer', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 5, 1));
    expect(service.isInSeason(planDefinitionSummer)).toBeTrue();
  });

  it('plandefinition is at the end of summer', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 7, 31, 23, 59, 59, 999));
    expect(service.isInSeason(planDefinitionSummer)).toBeTrue();
  });

  it('plandefinition is at the begin of autumn', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 8, 1));
    expect(service.isInSeason(planDefinitionAutumn)).toBeTrue();
  });

  it('plandefinition is at the end of autumn', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 10, 30, 23, 59, 59, 999));
    expect(service.isInSeason(planDefinitionAutumn)).toBeTrue();
  });

  it('plandefinition is at the begin of winter', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 0, 1));
    expect(service.isInSeason(planDefinitionWinter)).toBeTrue();
  });

  it('plandefinition is at the end of winter', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 11, 31, 23, 59, 59, 999));
    expect(service.isInSeason(planDefinitionWinter)).toBeTrue();
  });

  it('plandefinition is in all seasons', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2021, 11, 31, 23, 59, 59, 999));
    expect(service.isInSeason(planDefinitionAllSeason)).toBeTrue();
  });

  it('plandefinition is in winter on last day of winter on a leap year ', () => {
    spyOnProperty(service, 'currentDate').and.returnValue(new Date(2024, 1, 29, 23, 59, 59, 999));
    expect(service.isInSeason(planDefinitionWinter)).toBeTrue();
  });
});

const planDefinitionWinter = createSpyObj<PlanDefinition>('planDefinition', {}, {
  topic: [{
    coding: [{
      code: 'winter',
      system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-season',
      display: 'Winter'
    }]
  }]
});

const planDefinitionAutumn = createSpyObj<PlanDefinition>('planDefinition', {}, {
  topic: [{
    coding: [{
      code: 'autumn',
      system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-season',
      display: 'Herbst'
    }]
  }]
});
const planDefinitionSummer = createSpyObj<PlanDefinition>('planDefinition', {}, {
  topic: [{
    coding: [{
      code: 'summer',
      system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-season',
      display: 'Sommer'
    }]
  }]
});

const planDefinitionSpring = createSpyObj<PlanDefinition>('planDefinition', {}, {
  topic: [{
    coding: [{
      code: 'spring',
      system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-season',
      display: 'Frühling'
    }]
  }]
});

const planDefinitionAllSeason = createSpyObj<PlanDefinition>('planDefinition', {}, {
  topic: [{
    coding: [{
      code: 'all-season',
      system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-season',
      display: 'Ganzjährig'
    }]
  }]
});

