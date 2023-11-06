import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/components/services/base-resource.service';
import { PessoaModel } from '../model/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends BaseResourceService<PessoaModel> {

  constructor(protected Injector: Injector) {
    super('pessoas', Injector, PessoaModel.fromJson);
  }

}
