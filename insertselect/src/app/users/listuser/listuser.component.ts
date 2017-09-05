import { Component, OnInit } from '@angular/core';
import { UserserviceService} from './userservice.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  user = [];
  constructor(private userservice: UserserviceService) { }

  ngOnInit() {
    this.userservice.getUser()
      .subscribe(resEmployeeData => this.user = resEmployeeData);
    console.log('ptoduce- ', this.user);
  }

}
