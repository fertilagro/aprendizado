import { Component, Injector, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form/base-resource-form.component';
import { HttpUtilService } from 'src/app/shared/components/services/http-util.service';
import { PedidoModel } from './model/pedido.model';
import { PedidoService } from './service/pessoa.service';

@Component({
  selector: 'fertilagro-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent extends BaseResourceFormComponent<PedidoModel> implements OnInit {

  constructor(
    protected Injector: Injector,
    protected pedidoService: PedidoService,
    private httpServ: HttpUtilService,
    private messageService: MessageService
  ) {
    super(Injector, new PedidoModel(), pedidoService, PedidoModel.fromJson);
  }

  override ngOnInit(): void {

  }

  buildResourceForm() {
    this.resourceform = this.formBuilder.group({
      id: [null],
    });
  }


}
