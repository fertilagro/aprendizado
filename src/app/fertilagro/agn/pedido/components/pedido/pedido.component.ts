import { Component, Injector, OnInit, SimpleChanges } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';
import { HttpUtilService } from 'src/app/shared/components/services/http-util.service';
import { PedidoModel } from './model/pedido.model';
import { PedidoService } from './service/pessoa.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent extends BaseResourceFormComponent<PedidoModel> implements OnInit {

  colunasAmostras: any[];
  pedidoAmostras: any[];
  selecionados: any[] = [];

  constructor(
    protected Injector: Injector,
    protected pedidoService: PedidoService,
  ) {
    super(Injector, new PedidoModel(), pedidoService, PedidoModel.fromJson);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.tabelas();
  }

  buildResourceForm() {
    this.resourceform = this.formBuilder.group({
      id: this.formBuilder.group({
        empresa: [null],
        id: [null]
      }),
      data: [null],
      pessoa: [null],
      status: [null]
    });
  }

  tabelas() {
    this.colunasAmostras = [
      { campo: 'dataKey', titulo: 'dataKey' },
      { campo: 'amostra.id', titulo: 'Sol', campoConverter: (value) => {
        console.log(typeof value);
        if (typeof value === 'object') {
          return value.id;
        } else {
          return value;
        }
      } },
    ];
  }

  testando() {
    let teste: any[] = [];
    teste = this.selecionados;
  }

}
