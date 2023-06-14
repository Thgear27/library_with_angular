import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private url: string = 'http://localhost:8080/api/libros/mostrar';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url);
  }

  getBooksByFilter(
    tipo: string,
    autor: string,
    editorial: string,
    titulo: string
  ): Observable<Libro[]> {
    let urlRequest: string = `http://localhost:8080/api/libros/filtros?tipo=${tipo}&autor=${autor}&editorial=${editorial}&titulo=${titulo}`;
  
    console.log(urlRequest);
    return this.http.get<Libro[]>(urlRequest);
  }
}
