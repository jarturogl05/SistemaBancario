import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierSearchClientComponent } from './cashier-search-client.component';

describe('CashierSearchClientComponent', () => {
  let component: CashierSearchClientComponent;
  let fixture: ComponentFixture<CashierSearchClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashierSearchClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierSearchClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
