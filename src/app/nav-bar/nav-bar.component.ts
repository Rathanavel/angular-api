import { Component, OnInit } from '@angular/core';

// Custom JS import
import { setHeaderScrollEvent } from "./header-common.js";

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setHeaderScrollEvent('nav');
  }

}
