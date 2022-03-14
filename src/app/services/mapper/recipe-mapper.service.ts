import {Injectable} from '@angular/core';
import {Action, Diet, Effort, Recipe, Step} from '../../model/recipe';
import {ActivityDefinition, PlanDefinition, PlanDefinitionAction, Substance} from 'fhir/r4';
import {Substance2IngredientsMapperService} from './substance2-ingredients-mapper.service';
import {TopicDecoderService} from '../topic-decoder/topic-decoder.service';
import {CodeSystem} from '../topic-decoder/code-system';

@Injectable({
  providedIn: 'root'
})
export class RecipeMapperService {
  codeSystem = CodeSystem;

  constructor(private substance2IngredientsMapper: Substance2IngredientsMapperService, private topicDecoderService: TopicDecoderService) {
  }

  convert(planDefinition: PlanDefinition): Recipe {
    const recipe = new Recipe();
    recipe.id = planDefinition.id;
    recipe.title = planDefinition.title;
    recipe.subtitle = planDefinition.subtitle;
    recipe.imageUrl = this.imageUrl(planDefinition);
    recipe.effort = new Effort(+this.topicDecoderService.getCode(planDefinition, this.codeSystem.cofEffort)[0],
      this.topicDecoderService.decode(planDefinition, this.codeSystem.cofEffort)[0]);
    recipe.diets = this.diets(planDefinition);
    recipe.categories = this.topicDecoderService.decode(planDefinition, this.codeSystem.cofRecipeCategory);
    recipe.seasons = this.topicDecoderService.getCode(planDefinition, CodeSystem.cofSeason);
    recipe.portions = this.portions(planDefinition);
    recipe.steps = this.addSteps(planDefinition);
    recipe.comments = this.addComments(planDefinition);
    return recipe;
  }

  private imageUrl(planDefinition: PlanDefinition): string {
    if (!planDefinition || !planDefinition.relatedArtifact || !planDefinition.relatedArtifact[0]) {
      return null;
    }
    return planDefinition.relatedArtifact[0].url;
  }

  private portions(planDefinition: PlanDefinition): number {
    return this.substances(planDefinition).flatMap(substance => substance.ingredient)
      .find(ingredient => ingredient.hasOwnProperty('quantity'))
      .quantity.denominator.value;
  }

  private diets(planDefinition: PlanDefinition): Diet[] {
    return this.topicDecoderService.codeAndDisplay(planDefinition, this.codeSystem.cofDiet)
      .map(codeAndDisplay => new Diet(codeAndDisplay.code, codeAndDisplay.display));
  }

  private activities(planDefinition: PlanDefinition): ActivityDefinition[] {
    return planDefinition.contained.filter(c => c.resourceType === 'ActivityDefinition')
      .map(c => c as ActivityDefinition);
  }

  private substances(planDefinition: PlanDefinition): Substance[] {
    return planDefinition.contained.filter(c => c.resourceType === 'Substance')
      .map(c => c as Substance);
  }

  private addSteps(planDefinition: PlanDefinition): Step[] {
    return planDefinition.action.map(action => {
      const step = new Step(action.id, +(action.prefix.substring(0, action.prefix.length - 1)));
      const activitiesOfStep = this.activities(planDefinition).filter(activity => '#' + activity.id === action.definitionCanonical);
      this.addIngredientsToStep(planDefinition, activitiesOfStep, step);
      this.addActionToStep(activitiesOfStep, action, step);
      return step;
    });
  }

  private addIngredientsToStep(planDefinition: PlanDefinition, activities: ActivityDefinition[], step: Step) {
    const activityReferences = activities.map(activity => activity.productReference.reference);
    this.substances(planDefinition)
      .filter(substance => activityReferences.includes('#' + substance.id))
      .flatMap(substance => this.substance2IngredientsMapper.convert(substance))
      .forEach(ingredient => step.addIngredient(ingredient));
  }

  private addActionToStep(activities: ActivityDefinition[], action: PlanDefinitionAction, step: Step) {
    const title = action.prefix + ' ' + action.title;
    activities.map<Action>(activity => new Action(activity.id, title, activity.description))
      .forEach(action => step.addAction(action));
  }

  private addComments(planDefinition: PlanDefinition): string[] {
    return planDefinition.extension?.filter(ext => ext.url === 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment')
      .map(ext => ext.valueString);
  }
}
