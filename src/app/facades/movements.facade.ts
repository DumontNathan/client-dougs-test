import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MovementsStore} from "../stores/movements.store";
import {MovementsService} from "../http/movements/movements.service";
import {ValidationResponseDTO} from "../http/movements/movements.model";

@Injectable()
export class MovementsFacade {

  constructor(private movementsStore: MovementsStore, private movementsService: MovementsService) {
  }

  get movementData$(): Observable<ValidationResponseDTO> {
    return this.movementsStore.movementsValidationData$;
  }

  get jsonFormatError$(): Observable<boolean> {
    return this.movementsStore.jsonFormatError$;
  }

  loadMovementsValidationData(jsonString: string): void {
    this.movementsStore.setJsonFormatError(false);
    let json;
    try {
      json = JSON.parse(jsonString);
    } catch {
      return this.movementsStore.setJsonFormatError(true);
    }
    this.movementsService.getMovementsValidation(json)
      .subscribe(
        (movementsValidation: ValidationResponseDTO) => {
          this.movementsStore.setMovementsValidationData(movementsValidation)
        },
        (errorResponse: {error : ValidationResponseDTO} | any) => {
          console.log(errorResponse);
          // Improvement => errors sent by nestJS validation are not correctly handled
          if (errorResponse.status === 400) {
            this.movementsStore.setJsonFormatError(true);
          } else {
            this.movementsStore.setMovementsValidationData(errorResponse.error)
          }
        });
  }
}
