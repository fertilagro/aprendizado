import { Component, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';
import { PessoaModel } from './model/pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent extends BaseResourceFormComponent<PessoaModel> implements OnInit {



  buildResourceForm() {
    this.resourceform = this.formBuilder.group({

    });
  }

}
