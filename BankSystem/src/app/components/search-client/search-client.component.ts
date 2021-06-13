import { Client } from 'src/interfaces/Client';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit {

  public searchForm!:FormGroup
  searchQuery!:string

  @Output()
  OnSearchClient: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      query:['', Validators.required]
    })
  }

  send():any{
    this.OnSearchClient.emit(this.searchQuery);
  }


}
