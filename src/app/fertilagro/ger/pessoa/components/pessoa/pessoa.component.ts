import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';
import { HttpUtilService } from 'src/app/shared/components/services/http-util.service';
import { PessoaModel } from './model/pessoa.model';
import { PessoaService } from './service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent extends BaseResourceFormComponent<PessoaModel> implements OnInit {

  constructor(
    protected Injector: Injector,
    protected pessoaService: PessoaService,
    private httpServ: HttpUtilService,
  ) {
    super(Injector, new PessoaModel(), pessoaService, PessoaModel.fromJson);
  }

  buildResourceForm() {
    this.resourceform = this.formBuilder.group({
      id: [null],
      razaoSocial: [null],
      cnpj: [null],
      telefone: [null],
      estado: [null],
      numEnd: [null],
      endereco: [null],
      cidade: [null]
    });
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

}
