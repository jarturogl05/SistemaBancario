import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-bank-account',
  templateUrl: './manager-bank-account.component.html',
  styleUrls: ['./manager-bank-account.component.css']
})
export class ManagerBankAccountComponent implements OnInit {

  data:any = {}

  constructor() { }

  ngOnInit(): void {
    this.data= history.state.data
  }

  addNewAccount(data:any){
    console.log(data)
  }
}
