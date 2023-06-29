import { HttpUrlEncodingCodec } from '@angular/common/http';
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

  public categoriaSelected: string;
  public autorSelected: string;
  public editorialSelected: string;
  public tituloSelected: string;

  booksGridConfig: BooksGridConfiguration = {
    columnsNumber: 3,
  };

  constructor(
    private libroService: LibrosService,
    public loginService: LoginService,
    public searchService: SearchService
  ) {
    this.categoriaSelected = '';
    this.autorSelected = '';
    this.editorialSelected = '';
    this.tituloSelected = '';
  }

  ngOnInit(): void {
    this.searchService.getAllEditoriales().subscribe((data) => {
      this.arrEditoriales = data;
    });

    this.searchService.getAllCategorias().subscribe((data) => {
      this.arrCategorias = data;
    });

    this.searchService.doSearchSubject.subscribe((fromNav) => {
      let urlCodec = new HttpUrlEncodingCodec();
      let paramCategoria = urlCodec.encodeValue(this.categoriaSelected);
      let paramAutor = urlCodec.encodeValue(this.autorSelected);
      let paramEditorial = urlCodec.encodeValue(this.editorialSelected);

      if (!fromNav) {
        this.searchService.setSharedBookName(this.tituloSelected);
      }

      console.log(paramCategoria);
      console.log(paramAutor);
      console.log(paramEditorial);

      this.libroService
        .getBooksByFilter(
          paramCategoria,
          paramAutor,
          paramEditorial,
          this.searchService.getSharedBookName()
        )
        .subscribe((data) => {
          this.libros = data;
        });
    });

    this.searchService.doSearchSubject.next(true);
  }

  applyFilters() {
    this.searchService.doSearchSubject.next(false);
  }

  clearFilters() {
    // Limpia los radiobuttons
    let allRadioButtons = document.getElementsByClassName('filter__option-check');
    Array.from(allRadioButtons).forEach((item) => {
      const ele = item as HTMLInputElement;
      ele.checked = false;
    }); 

    // Limpia las input text
    let allInputText = document.getElementsByClassName('filter__input-text');
    Array.from(allInputText).forEach((item) => {
      const ele = item as HTMLInputElement;
      ele.value = '';
    });
  }

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 12,
    currentPage: 1,
  };
}
