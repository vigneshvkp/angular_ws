import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DemoserviceService {

  constructor(public http: Http) {
    console.log('demo service connected');
  }

  fetchData() {
    return this.http.get('/assets/ninja.json').map(
      (res) => res.json()
    );
  }

}
