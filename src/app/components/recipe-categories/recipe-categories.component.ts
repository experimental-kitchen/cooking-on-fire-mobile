import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CodeSystem} from '../../services/topic-decoder/code-system';
import {TopicDecoderService} from '../../services/topic-decoder/topic-decoder.service';
import {PlanDefinition} from 'fhir/r4';

@Component({
  selector: 'app-recipe-categories',
  templateUrl: './recipe-categories.component.html',
  styleUrls: ['./recipe-categories.component.scss'],
})
export class RecipeCategoriesComponent implements OnChanges {

  @Input()
  planDefinition: PlanDefinition;

  categories: string[];
  codeSystem = CodeSystem;

  constructor(private topicDecoderService: TopicDecoderService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.planDefinition) {
      this.categories = this.topicDecoderService.decode(this.planDefinition, this.codeSystem.cofRecipeCategory);
    }
  }

}
