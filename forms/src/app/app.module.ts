import { DataFormModule } from './data-form/data-form.module';
import { TemplateFormModule } from './template-form/template-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
// import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule.forRoot(),
    TemplateFormModule,
    ReactiveFormsModule,
    DataFormModule

  ],
  providers: [
    CampoControlErroComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
