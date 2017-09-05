import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  Heroes = [
    {
      'id': '',
      'name': ''
    }
  ];
  private url= 'http://localhost:8080/Heros_pjt/rest/hero/listallhero';
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(this.url).map((response1: Response) => response1.json()).subscribe(allheros => this.Heroes = allheros);
    console.log('all heroes ', this.Heroes);
  }

}
