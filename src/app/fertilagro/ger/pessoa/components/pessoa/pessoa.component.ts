import { Component, Injector, OnInit, EventEmitter } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';
import { HttpUtilService } from 'src/app/shared/components/services/http-util.service';
import { PessoaModel } from './model/pessoa.model';
import { PessoaService } from './service/pessoa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent extends BaseResourceFormComponent<PessoaModel> implements OnInit {

  status$: Observable<any>;

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
      cnpjCpf: [null],
      telefone: [null],
      email: [null],
      endereco: [null],
      cidade: [null],
      estado: [null],
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

  atribuiValorId(event) {
    this.resourceform.get("cidade").setValue(event);
  }

}
