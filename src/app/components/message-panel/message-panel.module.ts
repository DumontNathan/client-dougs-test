import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePanelComponent } from './message-panel.component';



@NgModule({
  declarations: [
    MessagePanelComponent
  ],
  exports: [
    MessagePanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MessagePanelModule { }
