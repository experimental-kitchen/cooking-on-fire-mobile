import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {MenuPlanPage} from './menu-plan.page';

import {MenuPlanPageRoutingModule} from './menu-plan-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPlanPageRoutingModule
  ],
  declarations: [MenuPlanPage]
})
export class HomePageModule {
}
