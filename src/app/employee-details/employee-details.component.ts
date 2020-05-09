import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../_models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('emp') empDetails: Employee;
  @Output() detailsClosed: EventEmitter<void>;

  constructor() {
    this.detailsClosed = new EventEmitter<void>();
  }
  onclose(){
    this.detailsClosed.emit();
    alert('Details component will be closed');
  }

  ngOnInit(): void {
  }

}
