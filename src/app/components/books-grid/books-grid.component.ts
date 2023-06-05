import { Component, OnInit, Input } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Libro } from 'src/app/models/libro';
import { BooksGridConfiguration } from 'src/app/classes/books-grid-configuration';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.scss']
})
export class BooksGridComponent {

  @Input() libros?: Libro[];
  @Input() gridConfig?: BooksGridConfiguration;

  public page!: number;

  public config: PaginationInstance;

  constructor() {
    this.config = {
      id: 'custom',
      itemsPerPage: 12,
      currentPage: 1
    }
  }

}
