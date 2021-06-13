import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  @Output() formStatus = new EventEmitter<boolean>();

  public newLoginForm! : FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.newLoginForm = this.formBuilder.group({
      clientId:[null, [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
    })
  }

  send():any{
    console.log(this.newLoginForm.valid)
  }
}
