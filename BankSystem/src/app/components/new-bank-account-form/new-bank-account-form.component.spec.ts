import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBankAccountFormComponent } from './new-bank-account-form.component';

describe('NewBankAccountFormComponent', () => {
  let component: NewBankAccountFormComponent;
  let fixture: ComponentFixture<NewBankAccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBankAccountFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBankAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
