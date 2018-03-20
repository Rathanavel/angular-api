import { Component, OnInit } from '@angular/core';
import { DbService } from '../../shared/db.service';

@Component({
  selector: 'app-ng5-employees',
  templateUrl: './ng5-employees.component.html',
  styleUrls: ['./ng5-employees.component.css']
})
export class Ng5EmployeesComponent implements OnInit {

  constructor(private _empServices: DbService) { }

  public employees = [];

  public errorMsg: string;

  ngOnInit() {
    // this.callServices();
  }

  ngAfterContentInit(){
    this.callServices();
  }

  callServices(){
    this._empServices.getOfflineEmployees()
      .subscribe(data => {
        this.employees = data,
          error => this.errorMsg = error;
        console.log(data)
      });
  }

}
