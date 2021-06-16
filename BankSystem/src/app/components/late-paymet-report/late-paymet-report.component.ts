import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-late-paymet-report',
  templateUrl: './late-paymet-report.component.html',
  styleUrls: ['./late-paymet-report.component.css']
})
export class LatePaymetReportComponent implements OnInit {


  public newReportForm! : FormGroup;

  renderData:boolean = false;
  latePaymentData:any = []

  constructor(private formBuilder:FormBuilder , private accountService:AccountService) { }

  ngOnInit(): void {
    this.newReportForm = this.formBuilder.group({
      startDate: [null, Validators.required],
      endDate: [null ,Validators.required]
    })
  }

  send(){
    const startDate = this.newReportForm.value.startDate;
    const endDate = this.newReportForm.value.endDate;
    this.accountService.latePaymentReport(`http://localhost:8000/latepaymentreport/${startDate}/${endDate}`).subscribe((response:any) =>{
        this.renderData = false;
        console.log(response);
        this.latePaymentData = response
        this.renderData = true;
    })
  }

}
