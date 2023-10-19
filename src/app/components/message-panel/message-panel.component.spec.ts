import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePanelComponent } from './message-panel.component';
import {WORDING} from "../../../assets/wording";
import {duplicatesMovementsResponseMock} from "../../../tests-mocks/movement-service-mock";

describe('ValidationMessageComponent', () => {
  let component: MessagePanelComponent;
  let fixture: ComponentFixture<MessagePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should display a warning message when typeMessage is "warning"', () => {
    component.typeMessage = 'warning';
    fixture.detectChanges();

    const warningTitle = fixture.nativeElement.querySelector('.message-title');
    expect(warningTitle).toBeTruthy();
    expect(warningTitle.textContent).toContain(WORDING.warningTitle);
  });

  it('should display a success message when typeMessage is "success"', () => {
    component.typeMessage = 'success';
    fixture.detectChanges();

    const successTitle = fixture.nativeElement.querySelector('.message-title');
    expect(successTitle).toBeTruthy();
    expect(successTitle.textContent).toContain(WORDING.successTitle);
  });

  it('should display an error message when typeMessage is "error"', () => {
    component.typeMessage = 'error';
    fixture.detectChanges();

    const errorTitle = fixture.nativeElement.querySelector('.message-title');
    expect(errorTitle).toBeTruthy();
    expect(errorTitle.textContent).toContain(WORDING.errorTitle);
  });

  it('should display validation reasons when typeMessage is "warning"', () => {
    component.typeMessage = 'warning';
    component.validationData = duplicatesMovementsResponseMock
    fixture.detectChanges();

    const reasonTitles = fixture.nativeElement.querySelectorAll('.reason-title');
    expect(reasonTitles.length).toBeGreaterThan(0);
  });
});
