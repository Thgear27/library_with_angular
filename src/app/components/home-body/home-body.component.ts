import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { BooksGridConfiguration } from 'src/app/classes/books-grid-configuration';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss'],
})
export class HomeBodyComponent implements OnInit {
  libros: Libro[] = [];
  public page!: number;

  booksGridConfig: BooksGridConfiguration = {
    columnsNumber: 4,
  };

  constructor(
    private libroService: LibrosService,
    public loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.libroService.getAll().subscribe((data) => {
      this.libros = data;
    });
  }

  onClickBuscarButton() {
    this.router.navigate(['search']);
  }

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 12,
    currentPage: 1,
  };
}
