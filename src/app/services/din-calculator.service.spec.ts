import { TestBed, inject } from '@angular/core/testing';

import { DinCalculatorService } from './din-calculator.service';

describe('DinCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinCalculatorService]
    });
  });

  it('should be created', inject([DinCalculatorService], (service: DinCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
