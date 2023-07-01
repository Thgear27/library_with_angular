import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  constructor(private http: HttpClient) { }

  getVentaByClientId(clientid: number) : Observable<any[]> {
    let urlRequest: string = `http://localhost:8080/api/clientes/detallesV2?id=${clientid}`
    console.log(urlRequest); // TODO: Borrar
    return this.http.get<any[]>(urlRequest);
  }
}
