import { Component, OnInit } from '@angular/core';

// Custom JS import
import { setHeaderScrollEvent } from "../../nav-bar/header-common.js";

@Component({
  selector: 'app-ng5-topnav',
  templateUrl: './ng5-topnav.component.html',
  styleUrls: ['./ng5-topnav.component.css']
})
export class Ng5TopnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setHeaderScrollEvent('navBar');
  }

  ngAfterViewInit(){
    setHeaderScrollEvent('navBar');
  }

}
