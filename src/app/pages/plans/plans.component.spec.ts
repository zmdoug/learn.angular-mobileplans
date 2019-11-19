import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansComponent } from './plans.component';
import { PlanFilterComponent } from 'src/app/shared/components/plan-filter/plan-filter.component';
import { MatCardModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanFilterModule } from 'src/app/shared/components/plan-filter/plan-filter.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PlansComponent', () => {
  let component: PlansComponent;
  let fixture: ComponentFixture<PlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PlanFilterModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ],
      declarations: [ PlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test price return', () => {
    expect(component.getPrice('011', '011', 200)).toBe('Não disponível');
  });
});
