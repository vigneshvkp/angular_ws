import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @ViewChild('projectname') pjtName;

  constructor() {

  }

  send2Server() {
    const data = this.pjtName.nativeElement;
    console.log('time cout called ', data.value);
  }

  ngOnInit() {

    // calls the function on time interval
    setInterval((dd) => this.send2Server(), 2000);
  }

  myOutputMethod(ev) {
    console.log(ev, ' got some text from child comp');
  }


  public ProjectRecord: any= [
    {projectId: '1', name: 'arion'},
    {projectId: '2', name: 'dan'},
    {projectId: '3', name: 'scr'},
    {projectId: '4', name: 'pan'}
  ];
}
