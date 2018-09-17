import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    DataFormComponent
  ]
})
export class DataFormModule { }
