import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/plan-service.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})

export class PlansComponent implements OnInit {

  public filteredPlan;
  public planConfig;
  public priceList = [];

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.priceList = this.planService.getPriceList();
    this.planConfig = this.planService.planConfig();
  }

  showPlans = (filter) => this.filteredPlan = filter;

  isRecommended = (plan, duration) => {
    /* Get the recommended plan */
    let closest = this.planConfig['minutes'].reduce(function(prev, curr) {
      return (Math.abs(curr - duration) < Math.abs(prev - duration) ? curr : prev);
    });

    return plan === closest;
  };

  getPrice(origin: string, destination: string, planMinutes:number) {

    /* Get zone plan price */
    let plan = this.priceList.filter(function (plan) {
      return plan.from === origin && plan.to === destination;
    });

    if(plan && plan.length > 0) {
      let planPrice = 0;

      if (planMinutes > 0) {
        /* Calculate plan price */
        let priceWithAditional = (plan[0]['price'] + (plan[0]['price'] * this.planConfig['overagePercentual']));
        planPrice = (this.filteredPlan.duration - planMinutes) * priceWithAditional;
      } else {
        /* Calculate regular price */
        planPrice = this.filteredPlan.duration * plan[0]['price'];
      }

      return planPrice > 0 ? '$' + planPrice.toFixed(2) : '$' + 0.00;
    } else {
      return 'Não disponível';
    }
  }
}
