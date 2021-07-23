import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesPage} from './receipes-page.component';
import {SlashSeparatedListPipePipe} from '../pipe/slash-separated-list.pipe';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SlashSeparatedListPipePipe],
  declarations: [
    SlashSeparatedListPipePipe
  ]
})
export class RecipesPageRoutingModule {
}
