import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerClientListComponent } from './manager-client-list.component';

describe('ManagerClientListComponent', () => {
  let component: ManagerClientListComponent;
  let fixture: ComponentFixture<ManagerClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerClientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
