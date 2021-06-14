import { ClientsService } from './../../services/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  formResponse:boolean = false;
  formError:boolean = false;
  formData:any = {}


  constructor(private clientService:ClientsService) { }

  ngOnInit(): void {
  }

  sendForm(data:any){
    this.clientService.createClient("http://localhost:8000/createClient", data).subscribe((response:any) =>{
      this.formData = {}
      this.formResponse = true;
      this.formError = false;
      this.formData = response
    }, error =>{
      this.formError = true
      this.formResponse = false;

    })
  }
}
