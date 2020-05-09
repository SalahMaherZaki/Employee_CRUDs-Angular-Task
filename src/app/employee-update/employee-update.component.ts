import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Employee } from '../_models/employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  @Input() myUpdatedEmployee: Employee = new Employee();
  @Output() employeeUpdated: EventEmitter<Employee>;
  onUpdate() {
    this.employeeUpdated.emit(this.myUpdatedEmployee);
  }
  constructor() {
    this.employeeUpdated = new EventEmitter<Employee>();
  }

  ngOnInit(): void {
  }

}
