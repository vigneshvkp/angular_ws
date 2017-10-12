import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Project} from '../pjt';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PjtService {

  private insurl = 'http://localhost:8080/projects/insert';

  constructor(public http: Http) {
  }

  fetchData() {
    return this.http.get('/assets/project_details.json').map(
      (res) => res.json()
    );
  }

  /*
  to testing
   */


  insertProject(project: Project) {
    console.log('service called for insrt');

    this.http.post(this.insurl, JSON.parse(JSON.stringify(project))).map((response1: Response) => response1.json())
      .subscribe(res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

}
