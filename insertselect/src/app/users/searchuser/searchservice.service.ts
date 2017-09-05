import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchserviceService {

  private url= 'http://localhost:8080/project_login/rest/insert/listuserbyid';

  constructor(private http: Http) { }

  getUserById(id: string) {
    return this.http.post(this.url, id).map((response1: Response) => response1.json());
  }


  getusers(id: string): Promise<User[]> {
    return this.http.post(this.url, id)
      .toPromise()
      .then(response => response.json().data as User[]);

  }
}
