import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myownvalue;
  @Output('myOutput') myOutput = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log('my own arg value ', this.myownvalue);
    this.myOutput.emit('HELLO THIS IS CHILD');   // emit data to parent
  }

}
