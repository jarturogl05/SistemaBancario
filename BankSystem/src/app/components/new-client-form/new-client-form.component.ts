import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-client-form',
  templateUrl: './new-client-form.component.html',
  styleUrls: ['./new-client-form.component.css']
})
export class NewClientFormComponent implements OnInit {

  @Output() formData = new EventEmitter<boolean>();


  public newClientForm!: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.newClientForm = this.formBuilder.group({
      fullname:['', Validators.required],
      address: ['', Validators.required],
      password:['', Validators.required]
    })
  }

  send():any {
    this.formData.emit(this.newClientForm.value);
  }
}
