import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashier-home',
  templateUrl: './cashier-home.component.html',
  styleUrls: ['./cashier-home.component.css']
})
export class CashierHomeComponent implements OnInit {

  menuItems = [
    { text: 'Withdrawal', src: '/withdrawal' },
    { text: 'Deposit', src: '/deposit' },
    { text: 'monthly payment', src: '/monthlyPayment' }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
