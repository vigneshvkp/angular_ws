import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import {UserlistserviceService} from './userlistservice.service';
import { User} from './user';
@Component({
  selector: 'app-insertuser',
  templateUrl: './insertuser.component.html',
  styleUrls: ['./insertuser.component.css']
})
export class InsertuserComponent implements OnInit {

  username = 'fds';
  password: string = null;

  constructor(private userins: UserlistserviceService, private user: User) { }

  ngOnInit() {
  }

  insertuser = function(username, password) {
    this.user.userName = username;
    this.user.passWord = password;
    this.userins.insertUser(this.user);
    console.log('stored user ', this.user.userName);
    console.log('after insert user func comp.ts');
  };

  valueChanged = function(user: string) {
    this.username = user;
    console.log('changeing');
  };
}
