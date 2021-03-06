import { Component, OnInit } from '@angular/core';
import { ClientsService } from './../../services/clients.service';


@Component({
  selector: 'app-manager-clients',
  templateUrl: './manager-clients.component.html',
  styleUrls: ['./manager-clients.component.css']
})
export class ManagerClientsComponent implements OnInit {

  public clientList:any = []

  constructor(private ClientsService:ClientsService) { }

  ngOnInit(): void {
    this.loadData();

  }

  public loadData(){
    this.ClientsService.get('http://localhost:8000/getClients').subscribe(response =>{
      this.clientList = response
    }, error => console.log(error))
  }

  public searchClient(query:string){
    this.ClientsService.getByid('http://localhost:8000/getClient/', query).subscribe(response =>{
      console.log(response)  
      this.clientList = response
    }, error => console.log(error))
  }
}
