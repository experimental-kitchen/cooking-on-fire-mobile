import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'menu-plan',
    loadChildren: () => import('./pages/menu-plan/menu-plan.module').then(m => m.HomePageModule),
    data: {title: 'Menüplan'}
  },
  {
    path: '',
    redirectTo: 'menu-plan',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    loadChildren: () => import('./pages/receipes/recipes.module').then(m => m.RecipesPageModule),
    data: {title: 'Rezepte'}
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
