import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private state: CalculatorState;
  private opperand1: number;
  private opperand2: number;
  private opperator: string;
  displayValue: string;

  constructor() {
    this.state = CalculatorState.Opperand1;
    this.displayValue = '';
    this.opperand1 = 0;
    this.opperand2 = 0;
    this.opperator = '';
  }

  _buttonPushed(value: string){
    if (this._isOpperator(value)) {
      this._handleOpperator(value);
    } else if (this._isNumber(value)) {
      this._handleNumber(value);
    } else if (this._isClear(value)) {
      this._clear();
    } else if (this._isEqual(value)) {
      let calc: number = this._calculation();
      this.displayValue = calc.toString();
      this.state = CalculatorState.Calculation;
    }
    console.log('State:[' + this.state +
         '] displayValue:[' + this.displayValue + 
         '] Opperand1:[' + this.opperand1 +
         '] Opperand2:[' + this.opperand2 +
         '] Opperator:[' + this.opperator + ']');
  }

  private _handleOpperator(value: string) {
    if(this.state == CalculatorState.Opperand1) {
      this.opperator = value;
      this.state = CalculatorState.Opperand2;
    } 
    else if(this.state == CalculatorState.Opperand2) {
      this.opperand1 = this._calculation();
      this.displayValue = this.opperand1.toString();
      this.state = CalculatorState.Opperand1;
    }
    else if(this.state == CalculatorState.Calculation) {
      this.opperand1 = +this.displayValue;
      this.opperand2 = 0;
      this.state = CalculatorState.Opperand2;
      this.opperator = value;
    }
  }

  private _handleNumber(value: string) {
    if(this.state == CalculatorState.Opperand1) {
      this.opperand1 = (this.opperand1 * 10) + (+value);
      this.displayValue = this.opperand1.toString();
    }
    if(this.state == CalculatorState.Opperand2) {
      this.opperand2 = (this.opperand2 * 10) + (+value);
      this.displayValue = this.opperand2.toString();
    }
    if(this.state == CalculatorState.Calculation) {
      this.opperand1 = 0;
      this.state = CalculatorState.Opperand1;
      this.opperand1 = (this.opperand1 * 10) + (+value);
      this.displayValue = this.opperand2.toString();
    }
  }

  private _calculation(): number {
    let calc: number;
    if (this.opperator == '+') {
      calc = this.opperand1 + this.opperand2;
    } else if (this.opperator == '-') {
      calc = this.opperand1 - this.opperand2;
    } else if (this.opperator == '*') {
      calc = this.opperand1 * this.opperand2;
    } else if (this.opperator == '/') {
      calc = this.opperand1 / this.opperand2;
    }
    return calc;
  }

  private _clear(){
    this.displayValue = '';
    this.state = CalculatorState.Opperand1;
    this.opperand1 = 0;
    this.opperand2 = 0;
  }

  private _isOpperator(value: string) {
    return '+-*/'.includes(value);
  }
  private _isNumber(value: string) {
    return '0123456789'.includes(value);
  }
  private _isClear(value: string) {
    return 'Cc'.includes(value);
  }
  private _isEqual(value: string) {
    return '=' == value;
  }
}
enum CalculatorState {
  Opperand1,
  Opperand2,
  Calculation
}