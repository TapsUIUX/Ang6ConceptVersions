import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
 
//Components
import { AppComponent } from './app.component';
import { FormComponent } from './components/shared/form/form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CheckBoxComponent } from './components/shared/check-box/check-box.component';
 

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
