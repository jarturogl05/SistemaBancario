import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reportTypeModel!:string;

  reportType!:string;

  constructor() { }

  ngOnInit(): void {

  }

  check(option:any){
    this.reportType = option;
  }

}
