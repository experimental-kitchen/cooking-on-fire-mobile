import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuPlanPage} from './menu-plan.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPlanPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPlanPageRoutingModule {
}
