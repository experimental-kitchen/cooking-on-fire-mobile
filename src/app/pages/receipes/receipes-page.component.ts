import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';
import {FhirService} from '../../services/fhir/fhir.service';
import {Bundle, PlanDefinition} from 'fhir/r4';
import {TopicDecoderService} from '../../services/topic-decoder/topic-decoder.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  planDefinitions: PlanDefinition[] = [];
  private offset = 0;
  private remaining: number;
  private readonly searchPageSize = 10;

  constructor(private fhirService: FhirService, public topicDecoderService: TopicDecoderService) {
  }

  ngOnInit(): void {
    this.performSearch(this.offset, this.searchPageSize);
  }

  performSearch(offset: number, size: number): void {
    this.fhirService.fhirClient.search({
      resourceType: 'PlanDefinition',
      searchParams: {publisher: 'Household Cook', status: 'active', _size: size, _offset: offset},
    }).then((bundle) => {
      if (bundle !== undefined) {
        (bundle as Bundle).entry.forEach(entry => {
          this.planDefinitions.push(entry.resource as PlanDefinition);
        });
        this.remaining = (bundle as Bundle).total;
      }
    });
  }

  loadData(event) {
    this.performSearch(this.offset + this.searchPageSize, this.searchPageSize);
    event.target.complete();

    if (this.remaining < this.searchPageSize) {
      event.target.disabled = true;
    }
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
