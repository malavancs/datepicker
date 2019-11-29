import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './date-picker/date-picker.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,NgbModule ],
  declarations: [ AppComponent, HelloComponent, DatePickerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
