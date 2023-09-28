import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseResourceFormComponent implements OnInit {

  constructor(
    override injector: Injector,
  ) {
    super(injector);
  }

  override ngOnInit() {
    
  }

  buildResourceForm() {
    this.resourceform = this.formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  public testarLogin() {
    if (this.resourceform.get('email').value === "55") {
      this.resourceform.getRawValue;
    }
  }

}
