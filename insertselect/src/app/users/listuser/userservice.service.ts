import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserserviceService {

  private url= 'http://localhost:8080/project_login/rest/insert/showuser';
  constructor(private http: Http) { }

  getUser() {
    return this.http.get(this.url).map((response1: Response) => response1.json());
  }

}
