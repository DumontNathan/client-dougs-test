import { TestBed } from '@angular/core/testing';

import { MovementsService } from './movements.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {validMovementsAndBalancesMock, validMovementsResponseMock} from "../../../tests-mocks/movement-service-mock";

describe('MovementsService', () => {
  let service: MovementsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(MovementsService);

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should send a POST request to the API', () => {
    service.getMovementsValidation(validMovementsAndBalancesMock).subscribe((response) => {
      expect(response).toEqual(validMovementsResponseMock);
    });

    const request = httpTestingController.expectOne(service.apiPath);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(validMovementsAndBalancesMock);

    request.flush(validMovementsResponseMock);
  });
});
