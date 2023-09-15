import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  resourceForm: FormGroup;

  constructor (
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildResourceForm();
  }

  buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  public testarLogin() {
    if (this.resourceForm.get('email').value === "55") {
      this.resourceForm.getRawValue;
    }
  }

}
