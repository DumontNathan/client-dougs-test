import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {ValidationResponseDTO} from "../http/movements/movements.model";

@Injectable({
  providedIn: "root",
})
export class MovementsStore {

  private movementsValidationDataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  // private movementsValidationDataSubject: BehaviorSubject<ValidationResponseDTO | null> = new BehaviorSubject<ValidationResponseDTO | null>(null);
  readonly movementsValidationData$: Observable<ValidationResponseDTO> = this.movementsValidationDataSubject.asObservable();

  private jsonFormatErrorSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  // private jsonFormatErrorSubject: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);
  readonly jsonFormatError$: Observable<boolean> = this.jsonFormatErrorSubject.asObservable();

  constructor() {
  }

  setMovementsValidationData(data: ValidationResponseDTO): void {
    this.movementsValidationDataSubject.next(data);
  }

  setJsonFormatError(data: boolean): void {
    this.jsonFormatErrorSubject.next(data);
  }
}
