import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Project} from '../pjt';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PjtService {

  private insertProjectUrl = 'http://localhost:8080/projects/insert';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

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


  create(project: Project): Promise<Project> {
    return this.http
      .post(this.insurl, JSON.stringify(project), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Project)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
