import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:8080/login";


  //Primero vamos a hacer que se genere el token
  generateToken(user: User) {
    return this.http.post(this.url, user);
  }

  //vamos a logear al usuario
  loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  //para traer el token
  getToken() {
    return localStorage.getItem('token');
  }

  //para traer el usuario logueado y devuelve un tipo cliente
  getCurrentClient() {
    return this.http.get<Cliente>("http://localhost:8080/login/clienteLogeado");
  }

  //para guardar el cliente en el localStorage
  setClient(cliente: any) {
    localStorage.setItem("cliente", JSON.stringify(cliente));
  }

  isLogged() {
    return this.getToken() != null; // false: no está logeado, true: sí está logeado
  }
}
