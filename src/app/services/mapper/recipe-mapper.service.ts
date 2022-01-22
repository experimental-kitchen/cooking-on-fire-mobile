import {Injectable} from '@angular/core';
import {Ingredient, IngredientList, Recipe, Step} from '../../model/recipe';
import {ActivityDefinition, PlanDefinition, PlanDefinitionAction, Substance} from 'fhir/r4';
import {Substance2IngredientsMapperService} from './substance2-ingredients-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeMapperService {
  constructor(private substance2IngredientsMapper: Substance2IngredientsMapperService) {
  }

  convert(planDefinition: PlanDefinition): Recipe {
    const ingredients = this.extractIngredients(planDefinition);
    const recipe = new Recipe();
    recipe.title = planDefinition.title;
    recipe.ingredients = new IngredientList(ingredients[0].portions, ingredients);
    return recipe;
  }

  private extractIngredients(planDefinition: PlanDefinition) {
    const activities = this.activitiesMap(planDefinition);
    const actions = this.actionsMap(planDefinition);
    const ingredients = this.convertSubstances2Ingredients(planDefinition);
    ingredients.forEach((ingredient) => this.addStep(ingredient, activities, actions));
    return ingredients;
  }

  private convertSubstances2Ingredients(planDefinition: PlanDefinition) {
    return planDefinition.contained.filter(c => c.resourceType === 'Substance')
      .map(c => this.substance2IngredientsMapper.convert(c as Substance))
      .flat(1);
  }

  private activitiesMap(planDefinition: PlanDefinition): Map<string, ActivityDefinition> {
    const activities = new Map<string, ActivityDefinition>();
    planDefinition.contained.filter(c => c.resourceType === 'ActivityDefinition')
      .map(c => c as ActivityDefinition)
      .forEach(c => activities.set(c.productReference.reference, c));
    return activities;
  }

  private actionsMap(planDefinition: PlanDefinition): Map<string, PlanDefinitionAction> {
    const actions = new Map<string, PlanDefinitionAction>();
    planDefinition.action.forEach(a => actions.set(a.definitionCanonical, a));
    return actions;
  }

  private addStep(ingredient: Ingredient, activities: Map<string, ActivityDefinition>, actions: Map<string, PlanDefinitionAction>) {
    const activity = activities.get('#' + ingredient.productId);
    const action = actions.get('#' + activity.id);
    ingredient.step = new Step(activity.id, +action.prefix);
  }
}
