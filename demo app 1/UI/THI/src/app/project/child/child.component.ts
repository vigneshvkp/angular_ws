import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myownvalue;
  @Output('myOutput') myOutput = new EventEmitter();


  @Input() projectId: number;
  @Input() projectName: string;
  @Input() createdBy: String;
  @Input() custId: String;
  @Input() deptId: String;
  @Output() sendRecord: EventEmitter<any> = new EventEmitter();

  public clr: string;

  constructor() {
    this.clr = '0';
  }

  ngOnInit() {
    console.log('my own arg value ', this.myownvalue);
    this.myOutput.emit('HELLO THIS IS CHILD');   // emit data to parent
  }

  selectRecord() {
    const selectedProject: any = {
      id: this.projectId,
      name: this.projectName,
      by: this.createdBy,
      cusid: this.custId,
      deptid: this.deptId
    };
    this.sendRecord.emit(selectedProject);
  }


}
