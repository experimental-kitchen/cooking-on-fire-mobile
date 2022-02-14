import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {EffortSpoonsComponent} from './effort-spoons.component';
import {Effort, Recipe, Size} from '../../model/recipe';
import createSpyObj = jasmine.createSpyObj;

describe('EffortSpoonsComponent', () => {
  let component: EffortSpoonsComponent;
  let fixture: ComponentFixture<EffortSpoonsComponent>;
  const recipe = createSpyObj<Recipe>('recipe', {}, {
    effort: new Effort(Size.low, 'Geht ganz schnell')
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EffortSpoonsComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EffortSpoonsComponent);
    component = fixture.componentInstance;
    component.recipe = recipe;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
