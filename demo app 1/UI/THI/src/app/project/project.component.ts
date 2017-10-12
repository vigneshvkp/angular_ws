import {Component, OnInit, ViewChild} from '@angular/core';
import {PjtService} from './services/pjt.service';
import { Project} from './pjt';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  id: number;
  name: string;
  createdBy: string;
  custId: string;
  deptId: string;

  @ViewChild('projectname') pjtName;

  public projectRecord: any = [
    {projectId: '1', name: 'arion'},
    {projectId: '2', name: 'dan'},
    {projectId: '3', name: 'scr'},
    {projectId: '4', name: 'pan'}
  ];

  public pjtRecord: any;
  public selectedProject: any;

  constructor(private pjtservice: PjtService, private project: Project) {
  }


  send2Server() {
    const data = this.pjtName.nativeElement;
    console.log('time cout called ', data.value);
  }

  ngOnInit() {

    // calls the function on time interval
    setInterval((dd) => this.send2Server(), 20000);
    this.pjtservice.fetchData().subscribe((data) => {
      this.pjtRecord = data;
    });
  }

  myOutputMethod(ev) {
    console.log(ev, ' got some text from child comp');
  }


  public getRecord(data: any): void {
    this.selectedProject = data;
    console.log('event emitted');

  }

  insertProject(pjtobj: any) {
    this.project.projectId = pjtobj.id;
    this.project.projectName = pjtobj.name;
    this.project.createdBy = pjtobj.by;
    this.project.custId = pjtobj.cusid;
    this.project.deptId = pjtobj.deptid;
  console.log('before call insert');
    this.pjtservice.insertProject(this.project);
    console.log('after call insert');
  }

}
