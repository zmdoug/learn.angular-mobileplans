import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanFilterComponent } from './plan-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [PlanFilterComponent],
  exports: [
    PlanFilterComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PlanFilterModule { }
