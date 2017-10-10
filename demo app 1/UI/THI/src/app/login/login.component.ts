import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: UserService) {
  }

  ngOnInit() {
  }

  loginForm(e) {
    e.preventDefault();
    console.log(e);
    this.user.setUserLoggedIn();
    let user = e.target.elements[0].value;
    let pass = e.target.elements[1].value;
    console.log('user ' + user);
    console.log('pass ' + pass);
    if (user === 'admin' && pass === 'admin') {
      this.router.navigate(['mainpage']);
    }
    return false;
  }

  excapefunc() {
    this.router.navigate(['project']);
  }
}
