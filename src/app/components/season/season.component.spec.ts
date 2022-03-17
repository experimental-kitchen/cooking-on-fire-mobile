import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {SeasonComponent} from './season.component';
import {Recipe} from '../../model/recipe';
import createSpyObj = jasmine.createSpyObj;

describe('SeasonComponent', () => {
  let component: SeasonComponent;
  let fixture: ComponentFixture<SeasonComponent>;
  const recipe = createSpyObj<Recipe>('recipe', {}, {
    seasons: ['spring']
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeasonComponent);
    component = fixture.componentInstance;
    component.recipe = recipe;
    fixture.detectChanges();
  }));

  it('should create', (done) => {
    expect(component).toBeTruthy();
    done();
  });
});
