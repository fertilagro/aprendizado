import { HttpClient } from '@angular/common/http';
import { Injector, } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';
import { BaseResourceModel } from '../models/base-resource.model';
import { HttpUtilService } from './http-util.service';
import { environment } from 'src/environments/environment';
import { Utils } from '../Util/utils-components';

export abstract class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;
  private httpServ: HttpUtilService;
  private baseUrl: string = "";

  constructor(
    protected apiPath: string,
    protected injector: Injector,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
    this.http = injector.get(HttpClient);
    this.httpServ = injector.get(HttpUtilService);
    this.baseUrl =  environment.baseUrl;
  }

  salvar(record: T) {
    const url = this.apiPath + '/salvar';
    return this.httpServ.chamarServicoPost(url, record).pipe(first());
  }

  postId(value, servico?): Observable<T> {
    const tipo = this.apiPath;
    let url = undefined;

    if (tipo === "pedidos") {
      url = `${this.apiPath}/${servico ? servico : 'buscarPorIdPedido'}`;
    } else if (tipo === "cidades") {
      url = `${this.apiPath}/${servico ? servico : 'buscarPorIdCidade'}`;
    } else if (tipo === "amostras") {
      url = `${this.apiPath}/${servico ? servico : 'buscarPorIdAmostra'}`;
    } else if (tipo === "pessoas") {
      url = `${this.apiPath}/${servico ? servico : 'buscarPorIdPessoa'}`;
    }
    
    return this.http.post(environment.baseUrl + url, { tipo, value })
      .pipe(
        map(this.jsonDataToResource.bind(this)),
        catchError(this.handleError)
      );
  }

  protected handleError(error: any): Observable<any> {
    console.log('Erro na requisição =>', error);
    return throwError(error);
  }

  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }

}
