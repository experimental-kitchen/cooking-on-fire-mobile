import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {RecipesPage} from './receipes-page.component';
import {FhirService} from '../services/fhir/fhir.service';
import Client from 'fhir-kit-client';
import {bundleResult} from './test';
import createSpy = jasmine.createSpy;
import createSpyObj = jasmine.createSpyObj;

describe('ReceipePage', () => {
  let component: RecipesPage;
  let fixture: ComponentFixture<RecipesPage>;
  const fhirService = createSpyObj<FhirService>('fhirService', ['fhirClient']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesPage],
      imports: [IonicModule.forRoot()],
      providers: [{provide: FhirService, useValue: fhirService}]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesPage);
    component = fixture.componentInstance;
    fhirService.fhirClient.search = createSpy<Client['search']>('search').and.returnValue(Promise.resolve(bundleResult));
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mock fhirService', fakeAsync(() => {
    expect(component.planDefinitions).toHaveSize(2);
  }));
});
