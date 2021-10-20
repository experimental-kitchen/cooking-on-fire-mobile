import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {RecipesListItemComponent} from './recipes-list-item.component';
import {SlashSeparatedListPipePipe} from '../../pipes/slash-separated-list.pipe';
import {EffortSpoonsComponent} from '../effort-spoons/effort-spoons.component';
import {DietSymbolsComponent} from '../diet-symbols/diet-symbols.component';
import {SeasonComponent} from '../season/season.component';
import {PlanDefinition} from 'fhir/r4';
import createSpyObj = jasmine.createSpyObj;

describe('RecipesListItemComponent', () => {
  let component: RecipesListItemComponent;
  let fixture: ComponentFixture<RecipesListItemComponent>;
  const planDefinition = createSpyObj<PlanDefinition>('planDefinition', {}, {
    topic: [{
      coding: [{
        system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
        display: 'Vorspeise',
        code: 'starter'
        }]
    }]
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesListItemComponent, SlashSeparatedListPipePipe, EffortSpoonsComponent, DietSymbolsComponent, SeasonComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesListItemComponent);
    component = fixture.componentInstance;
    component.planDefinition = planDefinition;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
