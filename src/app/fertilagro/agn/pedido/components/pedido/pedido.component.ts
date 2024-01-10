import { Component, Injector, OnInit } from '@angular/core';
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

<<<<<<< HEAD
=======
  // selecão grid
>>>>>>> 295d02c3e3c6378f275ad4f7be7183bb4ddcdbe7
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
      { campo: 'labelFkfield', titulo: 'labelFkfield', largura: 50 },
      { campo: 'id.id', titulo: 'id', largura: 80 },
    ];
    console.log("entrou na tabelas()")
  }

  public override buscarId(): Promise<any> {
      return super.buscarId();
  }

<<<<<<< HEAD
  teste() {
    let sele: any[];
    sele = this.selecionados;
=======
  testando() {
    let teste: any[] = [];
    teste = this.selecionados;
>>>>>>> 295d02c3e3c6378f275ad4f7be7183bb4ddcdbe7
  }

}
