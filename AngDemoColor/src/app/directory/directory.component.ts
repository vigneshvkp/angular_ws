import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import {FilterPipe} from '../filter.pipe';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],

})
export class DirectoryComponent implements OnInit {
  // ninja: string;
  ninjas = [
    {name: 'ram', belt: 'black'},
    {name: 'vimal', belt: 'red'},
    {name: 'kar', belt: 'purple'},
    {name: 'mon', belt: 'orange'}
  ];

  sear: string;


  // path param
  // constructor(private route: ActivatedRoute) {
  //   this.ninja = route.snapshot.params['ninja'];
  // }

  constructor() {

  }


  ngOnInit() {
  }

}
