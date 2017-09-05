import { Component, OnInit } from '@angular/core';
import { SearchserviceService} from './searchservice.service';
import { User} from './user';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  user = {
    'userName': '',
    'passWord': ''
  };
  id: string;
  pw: string;



  constructor(private searchservice: SearchserviceService, private http: Http) { }
  private url= 'http://localhost:8080/project_login/rest/insert/listuserbyid';
  searchun(id: string) {
    this.searchservice.getUserById(id)
      .subscribe(resEmployeeData => this.user = resEmployeeData);
    console.log('vaule', this.user);
    console.log('vaule', this.user);
  }

  ngOnInit() {


  }

}
