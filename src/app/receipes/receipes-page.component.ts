import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';
import {FhirService} from '../services/fhir/fhir.service';
import {Bundle, PlanDefinition} from 'fhir/r4';
import {TopicDecoderService} from '../services/topic-decoder/topic-decoder.service';
import {CodeSystem} from '../services/topic-decoder/CodeSystem';

@Component({
  selector: 'app-receipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  planDefinitions: PlanDefinition[] = [];
  codeSystem = CodeSystem;

  constructor(private fhirService: FhirService, public topicDecoderService: TopicDecoderService) {
  }

  ngOnInit(): void {
    this.performSearch(0, 10);
  }

  performSearch(offset: number, size: number): void {
    this.fhirService.fhirClient.search({
      resourceType: 'PlanDefinition',
      searchParams: {publisher: 'Household Cook', status: 'active', _size: size, _offset: offset},
    }).then((bundle) => {
      (bundle as Bundle).entry.forEach(entry => {
        this.planDefinitions.push(entry.resource as PlanDefinition);
      });
    });
  }

  loadData(event) {
    this.performSearch(0, 10);
    event.target.complete();
  }

  image(planDefinition: PlanDefinition): string {
    if (!planDefinition.relatedArtifact || !planDefinition.relatedArtifact[0]) {
      return null;
    }
    return planDefinition.relatedArtifact[0].url;
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
