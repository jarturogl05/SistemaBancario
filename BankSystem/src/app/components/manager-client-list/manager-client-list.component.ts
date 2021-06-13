import { ClientsService } from './../../services/clients.service';
import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/interfaces/Client';

@Component({
  selector: 'app-manager-client-list',
  templateUrl: './manager-client-list.component.html',
  styleUrls: ['./manager-client-list.component.css']
})
export class ManagerClientListComponent implements OnInit {

  @Input()
  clientList:any = [];

  constructor() { }

  ngOnInit(): void {
  }



}
