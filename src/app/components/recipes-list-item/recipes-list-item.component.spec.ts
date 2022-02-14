import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {RecipesListItemComponent} from './recipes-list-item.component';
import {SlashSeparatedListPipePipe} from '../../pipes/slash-separated-list.pipe';
import {EffortSpoonsComponent} from '../effort-spoons/effort-spoons.component';
import {DietSymbolsComponent} from '../diet-symbols/diet-symbols.component';
import {SeasonComponent} from '../season/season.component';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../../app-routing.module';
import {Recipe} from '../../model/recipe';
import createSpyObj = jasmine.createSpyObj;

describe('RecipesListItemComponent', () => {
  let component: RecipesListItemComponent;
  let fixture: ComponentFixture<RecipesListItemComponent>;
  const recipe = createSpyObj<Recipe>('recipe', {}, {
    categories: ['Vorspeise']
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesListItemComponent, SlashSeparatedListPipePipe, EffortSpoonsComponent, DietSymbolsComponent, SeasonComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesListItemComponent);
    component = fixture.componentInstance;
    component.recipe = recipe;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
