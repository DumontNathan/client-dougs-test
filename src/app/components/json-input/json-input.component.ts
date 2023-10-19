import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UntypedFormControl} from "@angular/forms";
@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.css']
})
export class JsonInputComponent {
  @Output() emitInputValue: EventEmitter<string> = new EventEmitter();
  @Input() placeHolder: string | undefined
  value: string | undefined;

  inputFormControl: UntypedFormControl;

  constructor() {
    this.inputFormControl = new UntypedFormControl(this.value);
    this.inputFormControl.valueChanges.subscribe((v) => this.emitInputValue.emit(v));
  }
}
