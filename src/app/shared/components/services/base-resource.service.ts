import { HttpClient   } from '@angular/common/http';
import { Injector,  } from '@angular/core';
import { BaseResourceModel } from '../models/base-resource.model';
import { HttpUtilService } from './http-util.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export abstract class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;
  private httpServ: HttpUtilService;
  baseUrl: 'http://localhost:8080/fertilagro/';

  constructor(
    protected apiPath: string,
    protected injector: Injector,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
    this.http = injector.get(HttpClient);
    this.httpServ = injector.get(HttpUtilService);
  }

  chamarServicoPost(servico: string, parametro: any, responseType?: any): Observable<any> {
    const url = `${this.apiPath}/${servico}`;
    return this.httpServ.executarRequisicao(() => {
      return this.http.post(this.baseUrl + url, parametro, responseType)
        .pipe(
          map(retorno => retorno),
          catchError(this.handleError)
        );
    });
  }

  protected handleError(error: any): Observable<any> {
    console.log('Erro na requisição =>', error);
    return throwError(error);
  }

}
