import { Component, OnInit } from '@angular/core';
import { DbService } from '../shared/db.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _empServices: DbService) { }

  public employees = [];

  ngOnInit() {

    this._empServices.getOfflineEmployees()
      .subscribe(data => this.employees = data)

  }
}
