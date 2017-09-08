import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  // '/assets/ninja.json' was replaced by firebase url
  fetchData() {
    return this.http.get('https://ang-firebase-24ebd.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }

}
