import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private url:string=  "http://localhost:8080/api/clientes/registrar";  

  constructor(private http:HttpClient) { }

  registrarCliente(cliente:Cliente){
    return this.http.post(this.url,cliente);
  }
}
