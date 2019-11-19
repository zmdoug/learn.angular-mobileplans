import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFilterComponent } from './plan-filter.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatRippleModule } from '@angular/material';
import { CommonModule } from '@angular/common';

describe('PlanFilterComponent', () => {
  let component: PlanFilterComponent;
  let fixture: ComponentFixture<PlanFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
      ],
      declarations: [ PlanFilterComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
