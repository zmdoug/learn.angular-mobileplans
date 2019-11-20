import { TestBed } from '@angular/core/testing';

import { PlanService } from './plan-service.service';

describe('PlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanService = TestBed.get(PlanService);
    expect(service).toBeTruthy();
  });

  it('should has price in list', () => {
    const service: PlanService = TestBed.get(PlanService);
    const priceList = service.getPriceList();
    expect(priceList.length).toBeGreaterThanOrEqual(0);
  });

  it('should has these properties', () => {
    const service: PlanService = TestBed.get(PlanService);
    const priceList = service.getPriceList();
    priceList.forEach((prop) => {
      expect(Object.keys(prop)).toContain('from');
      expect(Object.keys(prop)).toContain('to');
      expect(Object.keys(prop)).toContain('price');
    });
  });

  it('should has zone in list', () => {
    const service: PlanService = TestBed.get(PlanService);
    const zoneList = service.getZoneList();
    expect(Object.keys(zoneList)).toContain('from');
    expect(Object.keys(zoneList)).toContain('to');
  });

});
