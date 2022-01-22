import {Component, OnInit} from '@angular/core';
import {PlanDefinition} from 'fhir/r4';
import {FhirService} from '../../services/fhir/fhir.service';
import {ActivatedRoute} from '@angular/router';
import {AppTitleService} from '../../services/app-title/app-title.service';
import {TopicDecoderService} from '../../services/topic-decoder/topic-decoder.service';
import {CodeSystem} from '../../services/topic-decoder/code-system';
import {DietImageSortService} from '../../services/diet-image-sort/diet-image-sort.service';
import {Recipe} from '../../model/recipe';
import {RecipeMapperService} from '../../services/mapper/recipe-mapper.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  planDefinition: PlanDefinition;
  recipe: Recipe;

  constructor(private fhirService: FhirService, private route: ActivatedRoute, private appTitleService: AppTitleService,
              private topicDecoderService: TopicDecoderService, private dietImageSortService: DietImageSortService,
              private recipeMapper: RecipeMapperService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.fhirService.fhirClient.read({
        resourceType: 'PlanDefinition', id
      }).then((resource) => {
        this.planDefinition = (resource as PlanDefinition);
        this.recipe = this.recipeMapper.convert(this.planDefinition);
        this.appTitleService.next(this.recipe.title);
      });
    });
  }

  effortDescription(planDefinition: PlanDefinition) {
    if (!planDefinition) {
      return '';
    }
    const effort = this.topicDecoderService.decode(planDefinition, CodeSystem.cofEffort);
    return effort.length > 0 ? effort[0] : '';
  }

  diets(planDefinition: PlanDefinition) {
    if (!planDefinition) {
      return '';
    }
    return this.topicDecoderService.codeAndDisplay(planDefinition, CodeSystem.cofDiet).sort(this.dietImageSortService.sort);
  }
}
