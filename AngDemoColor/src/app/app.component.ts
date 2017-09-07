import {Component} from '@angular/core';
import {LogginService} from './loggin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogginService]
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

