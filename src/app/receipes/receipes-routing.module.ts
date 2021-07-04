import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesPage} from './receipes-page.component';
import {CategoryListPipe} from '../pipe/category-list.pipe';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, CategoryListPipe],
  declarations: [
    CategoryListPipe
  ]
})
export class RecipesPageRoutingModule {
}
