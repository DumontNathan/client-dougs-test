import {Component, OnChanges} from '@angular/core';
import {MovementsFacade} from "../../facades/movements.facade";
import {Observable} from "rxjs";
import {ValidationResponseDTO} from "../../http/movements/movements.model";

@Component({
  selector: 'app-movements-page',
  templateUrl: './movements.page.component.html',
  styleUrls: ['./movements.page.component.css']
})
export class MovementsPageComponent implements OnChanges {
  jsonInputValue: string = '';
  movementsValidationData$: Observable<ValidationResponseDTO>;
  jsonFormatError$: Observable<boolean>;

  constructor(private movementsFacade: MovementsFacade) {
    this.movementsValidationData$ = movementsFacade.movementData$;
    this.jsonFormatError$ = movementsFacade.jsonFormatError$;
  }

  ngOnChanges(): void {

  }

  setJsonInputValue(jsonInputValue: any) {
    this.jsonInputValue = jsonInputValue;
  }

  sendMovementsAndBalances() {
    this.movementsFacade.loadMovementsValidationData(this.jsonInputValue);
  }
}
