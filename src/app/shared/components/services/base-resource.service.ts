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

  protected handleError(error: any): Observable<any> {
    console.log('Erro na requisição =>', error);
    return throwError(error);
  }

  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }



}
