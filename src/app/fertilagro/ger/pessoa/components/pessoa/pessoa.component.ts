import { Component } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';
import { FormGroup, FormBuilder, NgModel } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent extends BaseResourceFormComponent {

  value = "";
  buildResourceForm() {
    this.resourceform = this.formBuilder.group({

    });
  }

}
