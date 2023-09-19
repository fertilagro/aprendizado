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
    const arrayModulos: Observable<any> = this.baseResourceServiceService.getDados(path);
    return arrayModulos;
  }

}
