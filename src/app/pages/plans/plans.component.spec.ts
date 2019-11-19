import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansComponent } from './plans.component';
import { PlanFilterComponent } from 'src/app/shared/components/plan-filter/plan-filter.component';
import { MatCardModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';

describe('PlansComponent', () => {
  let component: PlansComponent;
  let fixture: ComponentFixture<PlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatButtonModule
      ],
      declarations: [ PlansComponent, PlanFilterComponent ]
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
});
