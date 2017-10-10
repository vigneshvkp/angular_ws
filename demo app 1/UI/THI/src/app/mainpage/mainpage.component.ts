import {Component, OnInit} from '@angular/core';
import {DemoserviceService} from '../services/demoservice.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  name: string;
  age: number;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post;
  edituser: boolean = false;

  constructor(private demoService: DemoserviceService, private user: UserService) {
    console.log('mainpage constructor loaded');
  }

  ngOnInit() {
    this.name = 'tony';
    this.age = 25;
    this.address = {
      street: 'my street',
      country: 'ind',
    };
    this.hobbies = ['hobbie1', 'hobbir 2', 'hobbie3'];
    this.hello = 'hello';
    this.demoService.fetchData().subscribe((data) => {
      // console.log(data);
      this.posts = data;
    });
  }

  onclick() {
    this.name = 'startk';
    this.hobbies.push('new item');
  }

  addHobby(val) {
    this.hobbies.unshift(val);
    return false; // to disable form refresh
  }

  deleteHobby(val) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === val) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.edituser = !this.edituser;
  }
}


interface Address {
  street: string;
  country: string;
}

interface Post {
  name: string;
  belt: string;
}
