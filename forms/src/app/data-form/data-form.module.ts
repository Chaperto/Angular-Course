import { CampoControlErroComponent } from '../shared/campo-control-erro/campo-control-erro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormModule } from '../template-form/template-form.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TemplateFormModule
  ],
  declarations: [
    DataFormComponent  ]
})
export class DataFormModule { }
