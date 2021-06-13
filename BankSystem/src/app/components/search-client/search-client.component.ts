import { Client } from 'src/interfaces/Client';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit {

  public searchForm!:FormGroup

  @Output()
  OnSearchClient: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      
    })
  }

  send():any{
    console.log(this.searchForm.value)
    this.OnSearchClient.emit([]);
  }


}
