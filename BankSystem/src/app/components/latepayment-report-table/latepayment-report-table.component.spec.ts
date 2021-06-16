import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatepaymentReportTableComponent } from './latepayment-report-table.component';

describe('LatepaymentReportTableComponent', () => {
  let component: LatepaymentReportTableComponent;
  let fixture: ComponentFixture<LatepaymentReportTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatepaymentReportTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatepaymentReportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
