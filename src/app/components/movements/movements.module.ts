import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsComponent } from './movements.component';
import {HeaderModule} from "../header/header.module";
import {JsonInputModule} from "../json-input/json-input.module";
import {ButtonModule} from "../button/button.module";
import {MessagePanelModule} from "../message-panel/message-panel.module";



@NgModule({
    declarations: [
        MovementsComponent
    ],
    exports: [
        MovementsComponent
    ],
  imports: [
    CommonModule,
    HeaderModule,
    JsonInputModule,
    ButtonModule,
    MessagePanelModule
  ]
})
export class MovementsModule { }
