import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']

})


export class HomeBodyComponent implements OnInit {

  libros: Libro[] = [];
  public page!: number;

  constructor(private libroService: LibrosService,public loginService:LoginService) {

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
