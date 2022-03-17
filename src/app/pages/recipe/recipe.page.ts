import {Component, OnInit} from '@angular/core';
import {PlanDefinition} from 'fhir/r4';
import {FhirService} from '../../services/fhir/fhir.service';
import {ActivatedRoute} from '@angular/router';
import {AppTitleService} from '../../services/app-title/app-title.service';
import {Recipe} from '../../model/recipe';
import {RecipeMapperService} from '../../services/mapper/recipe-mapper.service';
import {DietImageSortService} from '../../services/diet-image-sort/diet-image-sort.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  planDefinition: PlanDefinition;
  recipe: Recipe;

  constructor(private fhirService: FhirService, private route: ActivatedRoute, private appTitleService: AppTitleService,
              private dietImageSortService: DietImageSortService, private recipeMapper: RecipeMapperService) {
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

  effortDescription(recipe: Recipe): string {
    if (!recipe.effort) {
      return '';
    }
    return recipe.effort ? recipe.effort.displayText : '';
  }

  diets(recipe: Recipe) {
    if (!recipe.diets) {
      return [];
    }
    return recipe.diets.sort(this.dietImageSortService.sort);
  }
}
