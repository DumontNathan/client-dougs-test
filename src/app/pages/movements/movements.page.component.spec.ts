import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementsPageComponent } from './movements.page.component';
import {MovementsFacade} from "../../facades/movements.facade";
import {HttpClientModule} from "@angular/common/http";

describe('MovementsComponent', () => {
  let component: MovementsPageComponent;
  let fixture: ComponentFixture<MovementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementsPageComponent ],
      providers: [MovementsFacade],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
