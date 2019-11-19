import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatListModule, MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent, FooterComponent]
})
export class NavbarModule { }
