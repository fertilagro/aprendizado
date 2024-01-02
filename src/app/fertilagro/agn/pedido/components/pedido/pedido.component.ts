import { Component, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';
import { HttpUtilService } from 'src/app/shared/components/services/http-util.service';
import { PedidoModel } from './model/pedido.model';
import { PedidoService } from './service/pessoa.service';
import { AmostraServiceService } from '../../../../ger/amostra/components/service/amostra.service.service';

@Component({
  selector: 'fertilagro-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent extends BaseResourceFormComponent<PedidoModel> implements OnInit, OnChanges {
  
  colunasAmostras: any[];

  pedidoAmostras: any[];

  constructor(
    protected Injector: Injector,
    protected pedidoService: PedidoService,
    private httpServ: HttpUtilService,
  ) {
    super(Injector, new PedidoModel(), pedidoService, PedidoModel.fromJson);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.tabelas();
    this.resourceform.get('data').valueChanges.subscribe((novoValor) => {
      console.log('Novo valor de "data":', novoValor);
      this.pedidoAmostras = this.resource["pedidoAmostras"]
    });
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]) {
      const valorAnterior = changes["data"].previousValue;
      const valorAtual = changes["data"].currentValue;
      
      console.log(`O valor anterior do meuInput era ${valorAnterior}, o valor atual é ${valorAtual}`);
    }
  }

      // Inscreva-se nas mudanças do controle "data"


  tabelas() {
    this.colunasAmostras = [
      { campo: 'id.id', titulo: 'Código' },
      { campo: 'id.pedido', titulo: 'Pedido' },
    ];
    console.log("entrou na tabelas()")
  }

  public override buscarId(): Promise<any> {
      return super.buscarId().then((id) => {

      });
  }

}
