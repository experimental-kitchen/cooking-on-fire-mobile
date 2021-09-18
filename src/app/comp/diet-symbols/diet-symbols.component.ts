import {Component, Input, OnChanges} from '@angular/core';
import {PlanDefinition} from 'fhir/r4';
import {TopicDecoderService} from '../../services/topic-decoder/topic-decoder.service';
import {CodeSystem} from '../../services/topic-decoder/CodeSystem';
import {DietImageSortService} from '../../services/diet-image-sort/diet-image-sort.service';

@Component({
  selector: 'app-diet-symbols',
  templateUrl: './diet-symbols.component.html',
  styleUrls: ['./diet-symbols.component.scss'],
})
export class DietSymbolsComponent implements OnChanges {

  @Input()
  planDefinition: PlanDefinition;

  codeSystem = CodeSystem;

  imageNames: string[] = [];

  constructor(private topicDecoderService: TopicDecoderService, private dietImageSortService: DietImageSortService) {
  }

  ngOnChanges() {
    const diets = this.topicDecoderService.getCode(this.planDefinition, this.codeSystem.cofDiet);
    this.imageNames = diets.sort(this.dietImageSortService.sort);
  }
}
