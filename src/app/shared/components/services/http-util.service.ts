import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, throwError } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { catchError, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(
    private http: HttpClient,
    protected router: Router
  ) { }

  enumeradorService(requisicao: string): Observable<any> {
    const url = environment.baseUrl + `enums?descricao=${requisicao}`;
    return this.http.get(url).pipe(
      map((lista: any[]) => lista.map(item => item = item))
    );
  }

  fazerRequisicao(fn: () => Observable<any>) {
      return fn();
  }

  chamarServicoPost(servico: string, parametro: any, responseType?: any): Observable<any> {
    
    return this.fazerRequisicao(() => {
      return this.http.post(environment.baseUrl + `/${servico}`, parametro, responseType)
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
