import { TestBed } from '@angular/core/testing';

import { CashierGuardGuard } from './cashier-guard.guard';

describe('CashierGuardGuard', () => {
  let guard: CashierGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CashierGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
