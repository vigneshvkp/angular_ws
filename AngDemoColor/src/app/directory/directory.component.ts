import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {DataService} from '../data.service';
import {LogginService} from '../loggin.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  // ninja: string;

  ninjas = [];

  /*    // declared as json so deleting it.
    ninjas = [
      {name: 'ram', belt: 'black'},
      {name: 'vimal', belt: 'red'},
      {name: 'kar', belt: 'purple'},
      {name: 'mon', belt: 'orange'}
    ]; */


  sear: string;


  // path param
  // constructor(private route: ActivatedRoute) {
  //   this.ninja = route.snapshot.params['ninja'];
  // }

  constructor(private logger: LogginService, private dataserv: DataService) {

  }

  logit() {
    this.logger.log();
  }


  ngOnInit() {
    this.dataserv.fetchData().subscribe(
      (data) => this.ninjas = data
  );
  }

}
