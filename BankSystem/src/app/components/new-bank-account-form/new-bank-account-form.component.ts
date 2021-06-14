import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-bank-account-form',
  templateUrl: './new-bank-account-form.component.html',
  styleUrls: ['./new-bank-account-form.component.css']
})
export class NewBankAccountFormComponent implements OnInit {

  @Input()
  clientData:any = {}

  @Output() formData = new EventEmitter();

  public newAccountForm!: FormGroup;

  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.newAccountForm = this.formBuilder.group({
      maxCredit:['', Validators.required]
    })

  }

  send(){

    const clientNumber = this.clientData.number
    
    const credit = this.newAccountForm.value.maxCredit


    this.formData.emit({clientNumber, credit});

  }

}
