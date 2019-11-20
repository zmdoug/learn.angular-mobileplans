import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFilterComponent } from './plan-filter.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatRippleModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
        NoopAnimationsModule
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

  it('should not have `from` in `to` zone', () => {
    let objEvent = {
        value: '011'
    };
    component.setOrigin(objEvent);
    expect(component.destinationList.includes(objEvent.value)).toBeFalsy();
  });

  it('should decrease form duration', () => {
    component.form.get('duration').setValue(40);
    component.setDuration('minus');
    expect(component.form.get('duration').value).toEqual(20);
  });

  it('should increase form duration', () => {
    component.form.get('duration').setValue(40);
    component.setDuration('plus');
    expect(component.form.get('duration').value).toEqual(60);
  });

});
