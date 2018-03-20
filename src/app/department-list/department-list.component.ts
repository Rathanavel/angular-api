import { Component, OnInit } from '@angular/core';
import { DbService } from '../shared/db.service';

@Component({
  selector: 'app-department-list',
  template: `
    <app-navbar></app-navbar>
    <div class="container">
    <p>
      department-list works!
      {{employees}}
    </p>
    </div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  constructor(private _empServices:DbService) { }
  public employees;


  ngOnInit() {
    // this._empServices.getSlowData()
    //   .subscribe(data => this.employees = JSON.stringify(data))
  }



}
