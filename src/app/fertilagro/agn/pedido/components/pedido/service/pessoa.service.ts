import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../../../../shared/components/services/base-resource.service';
import { PedidoModel } from '../model/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService extends BaseResourceService<PedidoModel> {

  constructor(protected Injector: Injector) {
    super('pedidos', Injector, PedidoModel.fromJson);
  }

}
