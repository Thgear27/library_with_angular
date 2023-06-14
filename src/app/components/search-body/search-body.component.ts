import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { BooksGridConfiguration } from 'src/app/classes/books-grid-configuration';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';
import { LoginService } from 'src/app/services/login.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.scss'],
})
export class SearchBodyComponent implements OnInit {
  libros: Libro[] = [];
  public editorialesFetched: Object[] = [];
  public arrEditoriales: any;
  public arrCategorias: any;

  public page!: number;

  booksGridConfig: BooksGridConfiguration = {
    columnsNumber: 3,
  };

  constructor(
    private libroService: LibrosService,
    public loginService: LoginService,
    public searchService: SearchService
  ) {}

  ngOnInit(): void {
    console.log(this.searchService.getSharedBookName());

    this.searchService.getAllEditoriales().subscribe((data) => {
      this.arrEditoriales = data;
    });

    this.searchService.getAllCategorias().subscribe((data) => {
      this.arrCategorias = data;
      console.log(this.arrCategorias);
    });

    this.libroService
      .getBooksByFilter('', '', '', this.searchService.getSharedBookName())
      .subscribe((data) => {
        this.libros = data;
      });

    this.searchService.doSearchSubject.subscribe(() => {
      this.libroService
        .getBooksByFilter('', '', '', this.searchService.getSharedBookName())
        .subscribe((data) => {
          this.libros = data;
        });
    });
  }

  applyFilters() {
    // Guardar variables  
  }

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 12,
    currentPage: 1,
  };
}
