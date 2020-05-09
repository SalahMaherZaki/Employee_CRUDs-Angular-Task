import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../_models/employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  @Output() employeeAdded: EventEmitter<Employee>;
  emp: Employee = new Employee();
  onAdd(){
    this.employeeAdded.emit(this.emp);
  }
  constructor() {
    this.employeeAdded = new EventEmitter<Employee>();
  }

  ngOnInit(): void {
  }

}
