import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';
import { HttpUtilService } from 'src/app/shared/components/services/http-util.service';
import { PessoaModel } from './model/pessoa.model';
import { PessoaService } from './service/pessoa.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent extends BaseResourceFormComponent<PessoaModel> implements OnInit {
  
  cidades: any[] | undefined;
  filteredCidades: any[];

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
      id: [null],
      razaoSocial: [null],
      cnpjCpf: [null],
      telefone: [null],
      email: [null],
      endereco: [null],
      cidade: [null],
      status: [null]
    });
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.enums();
  }

  enums() {
    this.status$ = this.httpServ.enumeradorService('StatusEnum');
  }

  override async salvar() {
     this.resourceform.get("cidade").setValue(this.devolveIdFkfield(this.resourceform.getRawValue().cidade));
     super.salvar()
  }

  showMessage() {
    this.messageService.add({
      severity: 'success', // 'success', 'info', 'warn', 'error'
      summary: 'Mensagem de Sucesso',
      detail: 'Operação realizada com sucesso!'
    });
  }


}
