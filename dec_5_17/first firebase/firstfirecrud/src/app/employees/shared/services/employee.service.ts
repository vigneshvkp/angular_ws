import {Injectable} from '@angular/core';
import {Employee} from '../employee.model';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class EmployeeService {

  employeeList: AngularFireList<any> = null;

  public selectedEmployee: Employee = new Employee();

  value: any;

  constructor(private fireBase: AngularFireDatabase) {
    this.employeeList = fireBase.list('employees');
  }

  getData() {
    this.employeeList = this.fireBase.list('employees');
    console.log(this.employeeList);
    return this.employeeList;
  }

  insertEmployee(employee: Employee) {
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  }

  updateEmployee(emp: Employee) {
    this.employeeList.update(emp.$key, {
      name: emp.name,
      position: emp.position,
      office: emp.office,
      salary: emp.salary
    });
  }

  deleteEmployee(key: string) {
    console.log('before delete in ser');
    this.employeeList.remove(key);
  }
}
