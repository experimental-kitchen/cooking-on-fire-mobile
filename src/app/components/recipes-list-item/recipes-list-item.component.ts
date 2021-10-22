import {Component, Input, OnInit} from '@angular/core';
import {PlanDefinition} from 'fhir/r4';
import {TopicDecoderService} from '../../services/topic-decoder/topic-decoder.service';
import {CodeSystem} from '../../services/topic-decoder/code-system';

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['../../app.component.scss', './recipes-list-item.component.scss'],
})
export class RecipesListItemComponent implements OnInit {
  @Input()
  planDefinition: PlanDefinition;
  categories: string[];
  codeSystem = CodeSystem;

  constructor(private topicDecoderService: TopicDecoderService) {
  }

  ngOnInit() {
    this.categories = this.topicDecoderService.decode(this.planDefinition, this.codeSystem.cofRecipeCategory);
  }
}
