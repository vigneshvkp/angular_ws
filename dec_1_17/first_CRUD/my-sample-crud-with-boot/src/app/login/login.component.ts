import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: UserServiceService) {
  }

  ngOnInit() {
  }

  loginForm(e) {


    const user1 = e.target.elements[0].value;
    const pass = e.target.elements[1].value;
    console.log('user ' + user1);
    console.log('pass ' + pass);
    if (user1 === 'a' && pass === 'a') {
      console.log('success');
      this.user.setIsUserLoggedIn(true);
      this.user.setUsername(user1);
      this.router.navigate(['mainpage']);

    }
    // return false;
  }
}
