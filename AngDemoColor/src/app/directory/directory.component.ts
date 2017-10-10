import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {DataService} from '../data.service';
import {LogginService} from '../loggin.service';
import {Http} from '@angular/http';
import {error} from 'util';

declare var firebase: any;

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

  name: any;
  belt: any;
  sear: string;
  response: any;

  // path param
  // constructor(private route: ActivatedRoute) {
  //   this.ninja = route.snapshot.params['ninja'];
  // }

  constructor(private logger: LogginService, private dataserv: DataService, private http: Http) {

  }

  logit() {
    this.logger.log();
  }


  ngOnInit() {
    /* this.dataserv.fetchData().subscribe(
       (data) => this.ninjas = data
     ); */
    // this.fbGetData();
    this.getdata();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.ninjas.push(snapshot.val());
    });
  }

  fbPostData(nam: any, bel: any) {
    console.log('before');
    firebase.database().ref('/').push({name: nam, belt: bel});
    console.log('after');

  }

  getdata() {
    return this.http.get('https://ang-firebase-24ebd.firebaseio.com/.json')
      .map(response => response.json())
      .subscribe((data) => this.ninjas = data);
  }


  putdata(nam: any, bel: any) {
    const body = JSON.stringify({name: nam, belt: bel})
    console.log('don');
    return this.http.put('https://ang-firebase-24ebd.firebaseio.com/.json', body)
      .map(response => response.json())
      .subscribe((data) => this.response = JSON.stringify(data),
        error => console.log(error)
        );

  }

}
