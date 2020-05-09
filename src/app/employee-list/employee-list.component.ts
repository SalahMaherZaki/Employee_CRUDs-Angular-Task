import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:no-trailing-whitespace
import { Employee } from '../_models/employee';  

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  emps: Employee[] = [
    new Employee(10, 'Salah', 6000),
    new Employee(20, 'Ahmed', 4000),
    new Employee(30, 'Ali', 5000),
  ];
  // tslint:disable-next-line:ban-types
  compToShow = 0;
  empDetailsObj: Employee;
  showDetails(n){
    this.compToShow = 1;
    this.empDetailsObj = this.emps[n];
  }
  hideDetails(){
    this.compToShow = 0;
  }
  showAdd(){
    this.compToShow = 2;
  }
  showUpdate(n){
    this.compToShow = 3;
    this.empDetailsObj = this.emps[n];
  }
  addEmployee(emp: Employee){
    this.emps.push(emp);
    this.compToShow = 0;
  }
  updateEmp(obj){
    // tslint:disable-next-line:prefer-const
    let myEmpIndex = this.emps.findIndex((emp) => emp.id == obj.id);
    this.emps[myEmpIndex] = obj;
    this.compToShow = 0;
  }
  deleteEmp(n){
    this.emps.splice(n, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
