import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RecipesPageRoutingModule} from './receipes-routing.module';

import {RecipesPage} from './receipes-page.component';
import {RecipesListItemComponent} from '../comp/recipes-list-item/recipes-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule
  ],
  declarations: [RecipesPage, RecipesListItemComponent]
})
export class RecipesPageModule {
}
