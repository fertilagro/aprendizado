import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  baseUrl: 'http://localhost:9992/';

  constructor(
    private http: HttpClient,
    protected router: Router
  ) { }

  httpPost(path, dados?, options?): Observable<any> {
    return this.executarRequisicao(() => {
      return this.http.post(this.baseUrl + path, dados, options);
    });
  }

  executarRequisicao(fn: () => Observable<any>) {
    return fn();
  }

}
