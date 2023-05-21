import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']

})


export class HomeBodyComponent implements OnInit {

  libros: Libro[] = [];
  public page!: number;

  constructor(private libroService: LibrosService) {

  }

  ngOnInit(): void {
    this.libroService.getAll().subscribe(data => {
      this.libros = data;
    })

  }

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
  };
}
