import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LogginService} from '../loggin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myData = 'testing piece';
  myBool = 'true';

  @Input() ninja;
  @Output() OnYell = new EventEmitter();

  Details = {
    name: 'vignesh',
    age: 25
  };

  makeYell(e) {
    this.OnYell.emit(e);
  }


  constructor(private logger: LogginService) {
  }

  logit(){
    console.log('home log');
  }

  ngOnInit() {
  }

}
