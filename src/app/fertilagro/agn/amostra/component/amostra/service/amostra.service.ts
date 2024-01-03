import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../../../../shared/components/services/base-resource.service';
import { AmostraModel } from '../model/amostra.model';

@Injectable({
  providedIn: 'root'
})
export class AmostraService extends BaseResourceService<AmostraModel> {

  constructor(protected Injector: Injector) {
    super('amostras', Injector, AmostraModel.fromJson);
  }

}
