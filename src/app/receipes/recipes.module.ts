import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RecipesPageRoutingModule} from './receipes-routing.module';

import {RecipesPage} from './receipes-page.component';
import {RecipesListItemComponent} from '../comp/recipes-list-item/recipes-list-item.component';
import {EffortSpoonsComponent} from '../comp/effort-spoons/effort-spoons.component';
import {DietSymbolsComponent} from '../comp/diet-symbols/diet-symbols.component';
import {SeasonComponent} from '../comp/season/season.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule
  ],
    declarations: [RecipesPage, RecipesListItemComponent, EffortSpoonsComponent, DietSymbolsComponent, SeasonComponent]
})
export class RecipesPageModule {
}
