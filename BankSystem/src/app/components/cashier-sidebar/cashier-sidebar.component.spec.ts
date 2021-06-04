import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierSidebarComponent } from './cashier-sidebar.component';

describe('CashierSidebarComponent', () => {
  let component: CashierSidebarComponent;
  let fixture: ComponentFixture<CashierSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashierSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
