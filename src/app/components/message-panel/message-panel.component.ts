import {Component, Input, OnInit} from '@angular/core';
import {ValidationResponseDTO} from "../../http/movements/movements.model";
import {WORDING} from "../../../assets/wording";

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.css']
})
export class MessagePanelComponent implements OnInit {
  @Input() validationData?: ValidationResponseDTO;
  @Input() typeMessage!: 'success' | 'error' | 'warning';
  constructor() { }

  ngOnInit(): void {
  }

  protected readonly WORDING = WORDING;
}
