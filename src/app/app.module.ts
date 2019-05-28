import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { NumpadComponent } from './components/ui/numpad/numpad.component';
import { DisplayComponent } from './components/ui/display/display.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ButtonComponent, NumpadComponent, DisplayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
