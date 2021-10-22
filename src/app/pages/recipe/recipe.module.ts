import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipePageRoutingModule } from './recipe-routing.module';

import { RecipePage } from './recipe.page';
import {RecipesPageModule} from '../receipes/recipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecipePageRoutingModule,
        RecipesPageModule
    ],
  declarations: [RecipePage]
})
export class RecipePageModule {}
