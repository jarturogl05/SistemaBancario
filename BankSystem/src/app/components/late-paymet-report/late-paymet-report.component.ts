import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-late-paymet-report',
  templateUrl: './late-paymet-report.component.html',
  styleUrls: ['./late-paymet-report.component.css']
})
export class LatePaymetReportComponent implements OnInit {


  public newReportForm! : FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  send(){
    
  }

}
