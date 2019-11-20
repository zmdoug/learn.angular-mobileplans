import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansComponent } from './plans.component';
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

  it('should return Não disponível', () => {
    expect(component.getPrice('011', '011', 200)).toBe('Não disponível');
  });

  it('should return a price', () => {
    component.showPlans({
      from: '011',
      to: '016',
      duration: 60
    })
    expect(component.getPrice('011', '016', 60)).toBeGreaterThanOrEqual(0);
  });

  it('should return true for recommended plan', () => {
    expect(component.isRecommended(60, 60)).toBeTruthy();
  });

  it('should return false for recommended plan', () => {
    expect(component.isRecommended(30, 60)).toBeFalsy();
  });

});
