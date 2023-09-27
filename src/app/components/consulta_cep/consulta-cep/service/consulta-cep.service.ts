import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(
    public http: HttpClient) 
  { }

  consultaAPI(cep: any): Observable<any> {
    return this.http.get("https://cdn.apicep.com/file/apicep/"+cep+".json");
  }
}
