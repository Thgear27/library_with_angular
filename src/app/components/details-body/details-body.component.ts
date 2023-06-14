import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-details-body',
  templateUrl: './details-body.component.html',
  styleUrls: ['./details-body.component.scss'],
})
export class DetailsBodyComponent implements OnInit {
  libro?: Libro;
  anioPublicacion?: string;
  
  constructor(
    private route: ActivatedRoute,
    private libroService: LibrosService,
  ) {}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.libroService.getBookById(id).subscribe((data)=>{
      this.libro = data;
      this.anioPublicacion = this.libro?.añoPublicacion;
    });
  }
}
