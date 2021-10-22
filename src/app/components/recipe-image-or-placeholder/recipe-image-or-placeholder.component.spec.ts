import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeImageOrPlaceholderComponent } from './recipe-image-or-placeholder.component';

describe('RecipeImageOrPlaceholderComponent', () => {
  let component: RecipeImageOrPlaceholderComponent;
  let fixture: ComponentFixture<RecipeImageOrPlaceholderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeImageOrPlaceholderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeImageOrPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
