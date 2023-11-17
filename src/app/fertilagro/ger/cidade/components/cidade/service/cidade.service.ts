import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../../../../shared/components/services/base-resource.service';
import { CidadeModel } from '../model/cidade.model';

@Injectable({
  providedIn: 'root'
})
export class CidadeService extends BaseResourceService<CidadeModel> {

  constructor(protected Injector: Injector) {
    super('cidade', Injector, CidadeModel.fromJson);
  }

}
