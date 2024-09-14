import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesSalaryComponent } from './employees-salary.component';

describe('EmployeesSalaryComponent', () => {
  let component: EmployeesSalaryComponent;
  let fixture: ComponentFixture<EmployeesSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesSalaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
