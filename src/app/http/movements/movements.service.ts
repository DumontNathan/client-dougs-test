import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovementsAndBalancesDTO, ValidationResponseDTO} from "./movements.model";

@Injectable({
  providedIn: 'root'
})
export class MovementsService {
  apiPath = 'http://localhost:3000/movements/validation'

  constructor(private http: HttpClient) {
  }

  getMovementsValidation(json: MovementsAndBalancesDTO): Observable<ValidationResponseDTO> {
    return this.http.post<ValidationResponseDTO>(`${this.apiPath}`, json);
  }
}
