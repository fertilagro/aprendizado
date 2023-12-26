import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';
import { HttpUtilService } from 'src/app/shared/components/services/http-util.service';
import { PessoaModel } from './model/pessoa.model';
import { PessoaService } from './service/pessoa.service';
import { MessageService } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent extends BaseResourceFormComponent<PessoaModel> implements OnInit {

  cidades: any[] | undefined;
  cidadesFiltradas: any[] | undefined;

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
      cidade: [null],
      status: [null],
    });
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.enums();
  this.cidades = [
    { "ID": 1, "nome": "goiania" },
    { "ID": 2, "nome": "santos" },
    { "ID": 3, "nome": "rio de janeiro" },
    { "ID": 4, "nome": "goiatuba" },
    { "ID": 5, "nome": "goias velho" },
    { "ID": 6, "nome": "goianesia" },
  ]
  }

  enums() {
    this.status$ = this.httpServ.enumeradorService('StatusEnum');
  }

  override async salvar() {
    // this.resourceform.get("cidade").setValue(this.devolveIdFkfield(this.resourceform.getRawValue().cidade));
     super.salvar()
  }

  showMessage() {
    this.messageService.add({
      severity: 'success', // 'success', 'info', 'warn', 'error'
      summary: 'Mensagem de Sucesso',
      detail: 'Operação realizada com sucesso!'
    });
  }

  filtrarCidades(event: AutoCompleteCompleteEvent) {
    let filtro: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.cidades as any[]).length; i++) {
      let cidade = (this.cidades as any[])[i];
      if (cidade.nome.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtro.push(cidade);
      }
    }
    this.cidadesFiltradas = filtro;
  }

}
