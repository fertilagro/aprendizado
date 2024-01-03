import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';
import { HttpUtilService } from 'src/app/shared/components/services/http-util.service';
import { PessoaModel } from './model/pessoa.model';
import { PessoaService } from './service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PessoaComponent extends BaseResourceFormComponent<PessoaModel> implements OnInit {

  status$: Observable<any>;

  constructor(
    protected Injector: Injector,
    protected pessoaService: PessoaService,
    private httpServ: HttpUtilService,
    private messageService: MessageService
  ) {
    super(Injector, new PessoaModel(), pessoaService, PessoaModel.fromJson);
  }

  buildResourceForm() {
    this.resourceform = this.formBuilder.group({
      id: this.formBuilder.group({
        empresa: [null],
        id: [null]
      }),
      razaoSocial: [null],
      cnpjCpf: [null],
      telefone: [null],
      email: [null],
      endereco: [null],
      cidade: [null, Validators.required],
      status: [null],
    });
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.enums();
  }

  enums() {
    this.status$ = this.httpServ.enumeradorService('StatusEnum');
  }

}
