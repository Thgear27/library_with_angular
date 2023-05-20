import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/modelo/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit{

  libros:Libro[]=[];
  public page!:number;

  constructor(private libroService:LibrosService){

  }

  ngOnInit(): void {
    this.libroService.getAll().subscribe(data =>{
      this.libros=data;
    })
  }

}
