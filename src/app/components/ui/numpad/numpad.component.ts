import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.css']
})
export class NumpadComponent implements OnInit {
  @Output() buttonPushed: EventEmitter<string>;

  constructor() {
    this.buttonPushed = new EventEmitter<string>();
   }

  ngOnInit() {
  }

  _buttonPushed(buttonValue: string){
    this.buttonPushed.emit(buttonValue);
  }

}