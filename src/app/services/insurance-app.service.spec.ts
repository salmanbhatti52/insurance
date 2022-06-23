import { TestBed } from '@angular/core/testing';

import { InsuranceAppService } from './insurance-app.service';

describe('InsuranceAppService', () => {
  let service: InsuranceAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
