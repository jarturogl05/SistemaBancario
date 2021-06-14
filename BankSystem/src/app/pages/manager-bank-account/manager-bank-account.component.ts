import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-bank-account',
  templateUrl: './manager-bank-account.component.html',
  styleUrls: ['./manager-bank-account.component.css']
})
export class ManagerBankAccountComponent implements OnInit {

  data:any = {}

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.data= history.state.data
  }

  addNewAccount(data:any){
    this.accountService.createAccount('http://localhost:8000/createAccount', data).subscribe( (response:any) =>{
      console.log(response);
    })
  }
}
