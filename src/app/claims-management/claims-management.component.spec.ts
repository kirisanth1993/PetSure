import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsManagementComponent } from './claims-management.component';

describe('ClaimsManagementComponent', () => {
  let component: ClaimsManagementComponent;
  let fixture: ComponentFixture<ClaimsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
