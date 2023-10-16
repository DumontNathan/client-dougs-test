import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonInputComponent } from './json-input.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    JsonInputComponent
  ],
  exports: [
    JsonInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class JsonInputModule { }
