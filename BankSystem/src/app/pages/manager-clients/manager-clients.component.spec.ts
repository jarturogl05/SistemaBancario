import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerClientsComponent } from './manager-clients.component';

describe('ManagerClientsComponent', () => {
  let component: ManagerClientsComponent;
  let fixture: ComponentFixture<ManagerClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
