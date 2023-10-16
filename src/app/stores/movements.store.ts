import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MovementsStore {

  private movementsValidationDataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movementsValidationData$ = this.movementsValidationDataSubject.asObservable();

  private jsonFormatErrorSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly jsonFormatError$ = this.jsonFormatErrorSubject.asObservable();

  constructor() {
  }

  setMovementsValidationData(data: any): void {
    this.movementsValidationDataSubject.next(data);
  }

  setJsonFormatError(data: any): void {
    this.jsonFormatErrorSubject.next(data);
  }
}
