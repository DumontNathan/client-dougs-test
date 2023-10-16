import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WORDING} from "../../../assets/wording";
import {Observable} from "rxjs";
import {ValidationResponseDTO} from "../../http/movements/movements.model";

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  @Input() movementsValidationData$?: Observable<ValidationResponseDTO>
  @Input() jsonFormatError$?: Observable<boolean>;
  @Output() jsonInputValue = new EventEmitter();
  @Output() emitClickButton = new EventEmitter();
  jsonInputPlaceHolder = WORDING.placeHolder;
  btnLabel = WORDING.buttonLabel;
  showJsonFormatError = false;

  constructor() {}

  ngOnInit(): void {
    if (this.jsonFormatError$) {
      this.jsonFormatError$.subscribe((jsonFormatError: boolean) => {
        this.showJsonFormatError = jsonFormatError
      });
    }
  }

  emitJsonInputValue(jsonInputValue: string) {
    this.jsonInputValue.emit(jsonInputValue);
  }

  protected readonly WORDING = WORDING;

  emitClick($event: boolean) {
    this.emitClickButton.emit($event)
  }
}
