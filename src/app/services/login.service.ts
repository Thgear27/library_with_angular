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


  generateToken(user: User) {
    return this.http.post(this.url, user);
  }

  loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getCurrentClient() {
    return this.http.get<Cliente>("http://localhost:8080/login/clienteLogeado");
  }


  /**
   * Para guardar el cliente en el localStorage
   */
  setClient(cliente: any) {
    localStorage.setItem("cliente", JSON.stringify(cliente));
  }

  isLogged() {
    return this.getToken() != null; // false: no está logeado, true: sí está logeado
  }

  /**
   * Cierra la sesión, remueve "token" y "cliente" del localstorage
   */
  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("cliente");
    localStorage.removeItem("carrito");
    window.location.reload();
  }
}
