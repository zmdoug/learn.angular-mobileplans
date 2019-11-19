import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavbarModule { }
