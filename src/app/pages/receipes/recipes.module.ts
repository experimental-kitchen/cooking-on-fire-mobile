import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RecipesPageRoutingModule} from './receipes-routing.module';

import {RecipesPage} from './receipes-page.component';
import {RecipesListItemComponent} from '../../components/recipes-list-item/recipes-list-item.component';
import {EffortSpoonsComponent} from '../../components/effort-spoons/effort-spoons.component';
import {DietSymbolsComponent} from '../../components/diet-symbols/diet-symbols.component';
import {SeasonComponent} from '../../components/season/season.component';

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
