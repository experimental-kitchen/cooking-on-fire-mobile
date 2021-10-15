import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from './app-routing.module';
import {Router} from '@angular/router';

describe('AppComponent', () => {

  let router: Router;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)]
    }).compileComponents();
  }));

  it('should create the app', () => {
    router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  // TODO: add more tests!

});
