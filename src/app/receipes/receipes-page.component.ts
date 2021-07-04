import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';
import {FhirService} from '../services/fhir/fhir.service';
import {Bundle, Coding, PlanDefinition} from 'fhir/r4';

@Component({
  selector: 'app-receipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  planDefinitions: PlanDefinition[] = [];

  constructor(private fhirService: FhirService) {
  }

  ngOnInit(): void {
    this.fhirService.fhirClient.search({
      resourceType: 'PlanDefinition',
      searchParams: {publisher: 'Household Cook', status: 'active'}
    }).then((bundle) => {
      (bundle as Bundle).entry.forEach(entry => {
        this.planDefinitions.push(entry.resource as PlanDefinition);
      });
    });
  }

  loadData(event) {
    event.target.complete();
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  category(planDefinition: PlanDefinition): string[] {
    return planDefinition.topic.filter(codeableConcept => this.filterCodings(codeableConcept.coding))
      .flatMap(codeableConcept => codeableConcept.coding)
      .map(coding => coding.display);
  }

  private filterCodings(codings: Coding[]): Coding {
    return codings.find((coding) => coding.system === 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory');
  }
}
