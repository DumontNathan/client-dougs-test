import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePanelComponent } from './message-panel.component';

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
});