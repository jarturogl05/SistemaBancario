import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  formResponse:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkFormStatus(status: boolean){
    this.formResponse = status

  }
}
