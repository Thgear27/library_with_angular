import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private sharedBookName: string;
  private urlRequestEditoriales: string =
    'http://localhost:8080/api/editoriales';
  private urlRequestAutores: string = 'http://localhost:8080/api/autores';
  private urlRequestTipos: string = 'http://localhost:8080/api/tipos/mostrar';

  public doSearchSubject = new Subject();

  constructor(private http: HttpClient) {
    this.sharedBookName = '';
  }

  getSharedBookName(): string {
    return this.sharedBookName;
  }

  setSharedBookName(bookName: string): void {
    this.sharedBookName = bookName;
  }

  // getAllEditoriales() : Observable<Object[]> {
  //   return this.http.get<Object[]>(this.urlRequestEditoriales);
  // }

  //...
}
