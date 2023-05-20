import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../modelo/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private url:string = "http://localhost:8080/api/libros/mostrar";

  constructor(private http:HttpClient) { }

  getAll():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url);
  }


}
