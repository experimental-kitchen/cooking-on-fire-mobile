import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {SeasonComponent} from './season.component';
import {PlanDefinition} from 'fhir/r4';
import createSpyObj = jasmine.createSpyObj;

describe('SeasonComponent', () => {
  let component: SeasonComponent;
  let fixture: ComponentFixture<SeasonComponent>;
  const planDefinition = createSpyObj<PlanDefinition>('planDefinition', {}, {
    topic: [{
      coding: [{
        system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-season',
        display: 'Frühling',
        code: 'spring',
      }]
    }]
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeasonComponent);
    component = fixture.componentInstance;
    component.planDefinition = planDefinition;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
