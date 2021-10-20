import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {EffortSpoonsComponent} from './effort-spoons.component';
import {PlanDefinition} from 'fhir/r4';
import createSpyObj = jasmine.createSpyObj;

describe('EffortSpoonsComponent', () => {
  let component: EffortSpoonsComponent;
  let fixture: ComponentFixture<EffortSpoonsComponent>;
  const planDefinition = createSpyObj<PlanDefinition>('planDefinition', {}, {
    topic: [{
      coding: [
        {
          system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-effort',
          display: 'Geht ganz schnell',
          code: '1'
        }]
    }]
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EffortSpoonsComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EffortSpoonsComponent);
    component = fixture.componentInstance;
    component.planDefinition = planDefinition;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
