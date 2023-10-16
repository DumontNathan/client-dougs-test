import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovementsPageComponent} from './movements.page.component';
import {MovementsModule} from "../../components/movements/movements.module";

@NgModule({
  declarations: [
    MovementsPageComponent
  ],
  exports: [
    MovementsPageComponent
  ],
  imports: [
    CommonModule,
    MovementsModule,
  ],
})
export class MovementsPageModule {
}
