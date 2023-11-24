import { HttpClient } from '@angular/common/http';
import { Injector, } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';
import { BaseResourceModel } from '../models/base-resource.model';
import { HttpUtilService } from './http-util.service';

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
    this.baseUrl = 'http://localhost:9992/';
  }

  salvar(record: T) {
    const url = this.baseUrl + this.apiPath + '/salvar';
    return this.http.post(url, record).pipe(first());
  }

  // buscarPorId(resource: T, servico?): Observable<T> {
  //   const url = `${this.apiPath}/${servico ? servico : 'buscarPorId'}`;

  //     return this.http.post(this.baseUrl + url, resource)
  //       .pipe(
  //         map(this.jsonDataToResource.bind(this)),
  //         catchError(this.handleError)
  //       );

  // }

  protected handleError(error: any): Observable<any> {
    console.log('Erro na requisição =>', error);
    return throwError(error);
  }

  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }



}
