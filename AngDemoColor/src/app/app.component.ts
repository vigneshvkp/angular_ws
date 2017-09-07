import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ninja = {
    name: 'raj',
    age: 12
  };
  title = 'app';


  yelling(e) {
    alert('yeling ');
  }
}

