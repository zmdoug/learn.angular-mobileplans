import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor() { }

  getPriceList = () => {
    let priceList = [
      {"from": '011', "to": "016", "price": 1.90},
      {"from": '011', "to": "017", "price": 1.70},
      {"from": '011', "to": "018", "price": 0.90},
      {"from": '016', "to": "011", "price": 2.90},
      {"from": '017', "to": "011", "price": 2.70},
      {"from": '018', "to": "011", "price": 1.90},
    ];
    return priceList;
  }

  getZoneList = () => {
    let zoneList = {
      from: ['011','016', '017', '018'],
      to: ['011','016', '017', '018']
    }
    return zoneList;
  }

  planConfig = () => {
    let config = {
      overagePercentual: 0.1,
      minutes: [30,60,120]
    }
    return config;
  }
}
