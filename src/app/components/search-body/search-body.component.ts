import { Component } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { BooksGridConfiguration } from 'src/app/classes/books-grid-configuration';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.scss']
})

export class SearchBodyComponent {
  
  libros: Libro[] = [];
  public page!: number;

  booksGridConfig: BooksGridConfiguration = {
    columnsNumber: 3
  };

  constructor(private libroService: LibrosService, public loginService:LoginService) {

  }

  ngOnInit(): void {
    this.libroService.getAll().subscribe(data => {
      this.libros = data;
    })

  }

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 12,
    currentPage: 1
  };
}
