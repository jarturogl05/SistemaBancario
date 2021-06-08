import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierWithdrawalComponent } from './cashier-withdrawal.component';

describe('CashierWithdrawalComponent', () => {
  let component: CashierWithdrawalComponent;
  let fixture: ComponentFixture<CashierWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashierWithdrawalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
