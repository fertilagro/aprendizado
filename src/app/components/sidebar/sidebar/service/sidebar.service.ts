import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResourceServiceService } from 'src/app/service/base-resource-service.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
    private baseResourceServiceService: BaseResourceServiceService
  ) { }

  getBuscaModulos(path) {
    this.baseResourceServiceService.getDados(path)
    .subscribe(ret => {
      let dados = ret;
    });
  }

}
