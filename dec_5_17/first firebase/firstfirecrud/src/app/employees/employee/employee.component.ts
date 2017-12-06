import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../shared/services/employee.service';
import {NgForm} from '@angular/forms';   //for using the NgForm below...getting value from form

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
  }

  onsubmit(form: NgForm) {
    if (form.value.$key === null) {
      this.employeeService.insertEmployee(form.value);
      this.resetForm(form);
    } else {
      this.employeeService.updateEmployee(form.value);
      this.resetForm(form);
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
     form.reset();    // it makes hidden fields to null so better declare hidden value as null
    }
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0
    };
  }

  onDelete(form: NgForm) {
    if (confirm('Are u Sure want to Delete ?') === true) {
      this.employeeService.deleteEmployee(form.value.$key);
      this.resetForm(form);
    }
  }
}
