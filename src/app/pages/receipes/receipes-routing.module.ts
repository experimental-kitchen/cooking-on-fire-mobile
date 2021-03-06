import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesPage} from './receipes-page.component';
import {SlashSeparatedListPipePipe} from '../../pipes/slash-separated-list.pipe';
import {DietToSymbolImageFileNamePipe} from '../../pipes/diet-to-symbol-image-file-name.pipe';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SlashSeparatedListPipePipe, DietToSymbolImageFileNamePipe],
  declarations: [
    SlashSeparatedListPipePipe, DietToSymbolImageFileNamePipe
  ]
})
export class RecipesPageRoutingModule {
}
