import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProjectService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private url = '/assets/project_details.json';


  constructor(public http: Http) {
  }

  fetchData() {
    return this.http.get(this.url).map(
      (res) => res.json()
      // (res) => console.log(res)
    );
  }
}
