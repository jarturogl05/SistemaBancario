import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatePaymetReportComponent } from './late-paymet-report.component';

describe('LatePaymetReportComponent', () => {
  let component: LatePaymetReportComponent;
  let fixture: ComponentFixture<LatePaymetReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatePaymetReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatePaymetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
