import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AppMenuItemComponent} from './app-menu-item.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../../../app-routing.module';

describe('AppMenuItemComponent', () => {
  let component: AppMenuItemComponent;
  let fixture: ComponentFixture<AppMenuItemComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppMenuItemComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes)]
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(AppMenuItemComponent);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
