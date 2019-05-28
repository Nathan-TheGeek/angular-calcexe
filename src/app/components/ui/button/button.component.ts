import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() value: string;
  @Output() onClick: EventEmitter<string>

  constructor() { 
    this.onClick = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  _onClick(){
    this.onClick.emit(this.value);
  }

}