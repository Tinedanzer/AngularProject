import { Component, OnInit } from '@angular/core';
import{Carebear} from '../carebearSelection';
@Component({
  selector: 'app-carebears',
  templateUrl: './carebears.component.html',
  styleUrls: ['./carebears.component.css']
})
export class CarebearsComponent implements OnInit {
  moreCarebears: Carebear={
    id:1,
    name: "Grumpy Bear"
  };
  constructor() { }

  ngOnInit() {
  }

}
