import { Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BaseResourceModel } from '../models/base-resource.model';
import { HttpUtilService } from './http-util.service';

export abstract class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;
  private httpServ: HttpUtilService;

  constructor(
    protected apiPath: string,
    protected injector: Injector,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
    this.http = injector.get(HttpClient);
    this.httpServ = injector.get(HttpUtilService);
  }

}
