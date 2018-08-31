import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropretyComponent } from './input-proprety/input-proprety.component';
import { OutputPropretyComponent } from './output-proprety/output-proprety.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropretyComponent,
    OutputPropretyComponent 
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
