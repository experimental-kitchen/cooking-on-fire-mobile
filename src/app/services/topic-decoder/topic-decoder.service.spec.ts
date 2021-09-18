import {TestBed} from '@angular/core/testing';

import {TopicDecoderService} from './topic-decoder.service';
import {CodeSystem} from './CodeSystem';
import {PlanDefinition} from 'fhir/r4';
import createSpyObj = jasmine.createSpyObj;

describe('TopicDecoderService', () => {
  let service: TopicDecoderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicDecoderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('decode resource topic by name when topic is null, undefined or [] on the resource', () => {
    const planDefinition = createSpyObj<PlanDefinition>('planDefinition', {}, {topic: null});
    expect(service.decode(planDefinition, CodeSystem.cofRecipeCategory)).toEqual([]);
  });

  it('decode resource topic by name when the coding is null, undefined or [] on the resource', () => {
    const planDefinition = createSpyObj<PlanDefinition>('planDefinition', {}, {
      topic: [{
        coding: null
      }]
    });
    expect(service.decode(planDefinition, CodeSystem.cofRecipeCategory)).toEqual([]);
  });

  it('decode resource topic by name when the codings system is null or undefined on the resource', () => {
    const planDefinition = createSpyObj<PlanDefinition>('planDefinition', {}, {
      topic: [{
        coding: [{
          system: undefined,
          display: 'some value'
        }]
      }]
    });
    expect(service.decode(planDefinition, CodeSystem.cofRecipeCategory)).toEqual([]);
  });

  it('decode resource topic by name when the codings system is null or undefined on the resource', () => {
    const planDefinition = createSpyObj<PlanDefinition>('planDefinition', {}, {
      topic: [{
        coding: [{
          system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
          display: null
        }]
      }]
    });
    expect(service.decode(planDefinition, CodeSystem.cofRecipeCategory)).toEqual([]);
  });

  it('decode resource topic by name', () => {
    const planDefinition = createSpyObj<PlanDefinition>('planDefinition', {}, {
      topic: [{
        coding: [{
          system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
          display: 'Hauptspeise'
        }]
      }]
    });
    expect(service.decode(planDefinition, CodeSystem.cofRecipeCategory)).toEqual(['Hauptspeise']);
  });

  it('decode resource topic by name with more than one entry', () => {
    const planDefinition = createSpyObj<PlanDefinition>('planDefinition', {}, {
      topic: [{
        coding: [{
          system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
          display: 'Vorspeise'
        },
        ]
      },
        {
          coding: [{
            system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
            display: 'Apéro'
          },
          ]
        }]
    });
    expect(service.decode(planDefinition, CodeSystem.cofRecipeCategory)).toEqual(['Vorspeise', 'Apéro']);
  });

  it('decode resource topic by name with more than one code systems', () => {
    const planDefinition = createSpyObj<PlanDefinition>('planDefinition', {}, {
      topic: [{
        coding: [{
          system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
          display: 'Vorspeise'
        },
        ]
      },
        {
          coding: [{
            system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
            display: 'Apéro'
          },
          ]
        },
        {
          coding: [{
            system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-somethingelse',
            display: 'some value'
          },
          ]
        },
        {
          coding: [{
            system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-somethingelse',
            display: 'some other value'
          },
          ]
        }]
    });
    expect(service.decode(planDefinition, CodeSystem.cofRecipeCategory)).toEqual(['Vorspeise', 'Apéro']);
  });
  it('get code from resource topic by name', () => {
    const planDefinition = createSpyObj<PlanDefinition>('planDefinition', {}, {
      topic: [{
        coding: [{
          code: 'some code',
          system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
          display: 'Hauptspeise'
        }]
      }]
    });
    expect(service.getCode(planDefinition, CodeSystem.cofRecipeCategory)).toEqual(['some code']);
  });
});
