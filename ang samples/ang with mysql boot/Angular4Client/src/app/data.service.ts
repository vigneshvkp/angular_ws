import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Customer } from './customer';

@Injectable()
export class DataService {

  private customersUrl = 'http://localhost:8080/cus/customer';  // URL to web API
  private saveCustomerUrl = 'http://localhost:8080/cus/postcustomer';
 private headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
 // private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) {}

  addCustomer(customer: Customer){
    var params = {

      "id": customer.id,
      "firstName": customer.firstName,
      "lastName": customer.lastName
    }
    let options = new RequestOptions({ headers : headers });

    var headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    this.http.post('http://localhost:8080/cus/postcustomer', params, {
      headers: headers
    }).map(res => res.json())
      .subscribe(


        () => console.log('inserted success')
      );
  }


  // Get all customers
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }

  getCustomersByLastName(lastName: string): Promise<Customer[]> {
    const url = `http://localhost:8080/findbylastname/${lastName}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

  create(customer: Customer): Promise<Customer> {

    return this.http
      .post(this.saveCustomerUrl, JSON.stringify(customer), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Customer)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
