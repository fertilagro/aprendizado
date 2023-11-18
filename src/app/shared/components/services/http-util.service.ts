import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(
    private http: HttpClient,
    protected router: Router
  ) { }

  httpPost(path, dados?, options?): Observable<any> {
    return this.executarRequisicao(() => {
      return this.http.post(environment.baseUrl + path, dados, options);
    });
  }

  executarRequisicao(fn: () => Observable<any>) {
    return fn();
  }

  enumeradorService(requisicao: string): Observable<any> {
    const url = environment.baseUrl + `enums?descricao=${requisicao}`;
    return this.http.get(url).pipe(
      map((lista: any[]) =>
       //lista.map(item => item))
       lista.map(item => item = item))
    );
  }

}
