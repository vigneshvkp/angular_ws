import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private routes: ActivatedRoute) {
  }

  name: string;
  id: string;

  ngOnInit() {
    this.name = this.routes.snapshot.params.name;
    this.id = this.routes.snapshot.params.id;
    console.log(this.routes);
  }

}
