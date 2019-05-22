import { Component, OnInit } from '@angular/core';
import{Carebear} from '../carebearSelection';
import {CarebearHeroes} from '../carebearHeroes';
@Component({
  selector: 'app-carebears',
  templateUrl: './carebears.component.html',
  styleUrls: ['./carebears.component.css']
})

export class CarebearsComponent implements OnInit {
  care=CarebearHeroes;
  carebearSet: Carebear={
    id:1,
    name: "Grumpy Bear",
    powerLevel:465
  };
  constructor() { }

  ngOnInit() {
    // console.log(this.carebearSet)
  }

}

