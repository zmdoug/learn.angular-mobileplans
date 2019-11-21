import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PlanService } from 'src/app/services/plan-service.service';

@Component({
  selector: 'plan-filter',
  templateUrl: './plan-filter.component.html',
  styleUrls: ['./plan-filter.component.scss']
})

export class PlanFilterComponent implements OnInit {

  @Output() selectedFilter:any = new EventEmitter();
  public form: FormGroup;
  public origin;
  public zoneList: object;
  public destinationList = [];
  public priceList = [];

  constructor(private planService: PlanService) { }

  ngOnInit() {

    this.zoneList = this.planService.getZoneList();
    this.priceList = this.planService.getPriceList();

    this.destinationList = this.zoneList['to'];

    this.form = new FormGroup({
      from: new FormControl('', []),
      to: new FormControl('', []),
      duration: new FormControl(20, [])
    });

    this.form.valueChanges.subscribe(() => this.setOutput());
  }

  setOrigin(event) {
    this.origin = event.value;
    /** set destination list */
    this.destinationList = [];
    this.priceList.forEach(element => {
      if(element.from === this.origin) {
        this.destinationList.push(element.to);
      }
    });
    this.form.get('to').setValue([]);
    this.setDuration(this.form.get('duration').value);
  }

  setDuration(operator) {
    let duration = this.form.get('duration').value;

    if(operator === 'minus' && duration >= 40) {
      this.form.get('duration').setValue(parseInt(duration) - 20);
    }
    if(operator === 'plus') {
      this.form.get('duration').setValue(parseInt(duration) + 20);
    }
  }

  setOutput() {
    let obj = this.form.getRawValue();
    this.selectedFilter.emit(obj);
  }

}
