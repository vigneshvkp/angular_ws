import {Component, OnInit} from '@angular/core';
import {AngularFireList} from 'angularfire2/database';

import {EmployeeService} from '../shared/services/employee.service';
import {Employee} from '../shared/employee.model';
// import {element} from 'protractor';
// import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: AngularFireList<Employee>;
  // employeeList: Employee[];

  // employeeList: FirebaseListObservable<any>;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    const x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeeList.push(y as Employee);
      });

    });
  }

  onItemClick(emp: Employee) {
    // this.employeeService.selectedEmployee = emp;      //-- it affect performance..
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

}
