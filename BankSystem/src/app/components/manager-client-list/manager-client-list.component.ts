import { Component, OnInit } from '@angular/core';
import { Client } from 'src/interfaces/Client';

@Component({
  selector: 'app-manager-client-list',
  templateUrl: './manager-client-list.component.html',
  styleUrls: ['./manager-client-list.component.css']
})
export class ManagerClientListComponent implements OnInit {

  clientList: Client[] = [
    {name: "jose Arturo Garcia Lopez", numClient: 20202020},
    {name: "ivonne Garcia Lopez", numClient: 20203420},
    {name: "Kassandra Garcia Lopez", numClient: 23202020}


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
