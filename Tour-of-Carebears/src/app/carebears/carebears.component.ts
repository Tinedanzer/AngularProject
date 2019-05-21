import { Component, OnInit } from '@angular/core';
import{Carebear} from '../carebearSelection';
@Component({
  selector: 'app-carebears',
  templateUrl: './carebears.component.html',
  styleUrls: ['./carebears.component.css']
})
export class CarebearsComponent implements OnInit {
// eventually making a reusable object by assigning class Carebear to 'carebears' variable below.
  carebears: Carebear={
    id:1,
    name: "Grumpy Bear",
    powerlevel:469
  };
  constructor() { }

  ngOnInit() {
  }

}
