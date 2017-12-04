import {Component, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {Project} from './pjt';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private project: Project) {
  }

  public pjtRecord: any;

  public selectedProject = {
    id: null,
    name: null,
    by: null,
    cusid: null,
    deptid: null
  };

  ngOnInit() {
    this.projectService.fetchData().subscribe((data) => {
      this.pjtRecord = data;
      console.log(this.pjtRecord);
    });
  }

  insertProject(projectObject: any) {
    this.project.projectId = projectObject.projectId;
    this.project.projectName = projectObject.name;
    this.project.createdBy = projectObject.by;
    this.project.custId = projectObject.cusid;
    this.project.deptId = projectObject.deptid;
    console.log(this.project);
    console.log('insert not impl');
  }

  selectRecord(data: any) {
    this.selectedProject.name = data.name;
    this.selectedProject.id = data.projectId;
    this.selectedProject.by = data.createdBy;
    this.selectedProject.cusid = data.custId;
    this.selectedProject.deptid = data.deptId;
  }
}
