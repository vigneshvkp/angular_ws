import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { User} from './user';
import { Response} from '@angular/http';

@Injectable()
export class UserlistserviceService {

  private url= 'http://localhost:8080/project_login/rest/insert/insertuser';
  constructor(private http: Http) {

  }

  insertUser(user: User ) {

    this.http.post(this.url, 	JSON.parse(JSON.stringify(user))).map((response1: Response) => response1.json())
      .subscribe(res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

}
