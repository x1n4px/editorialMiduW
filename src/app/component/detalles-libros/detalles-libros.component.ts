import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from 'src/app/service/libros.service';

@Component({
  selector: 'app-detalles-libros',
  templateUrl: './detalles-libros.component.html',
  styleUrls: ['./detalles-libros.component.css']
})
export class DetallesLibrosComponent implements OnInit {
  libro: any;
  otros: any[] = [];
  constructor(private route: ActivatedRoute, private librosService: LibrosService) {

  }
  ngOnInit(): void {
    let titulo = this.route.snapshot.paramMap.get('title');
    this.libro = this.librosService.devolverLibro(titulo ? titulo : '');
    console.log(this.libro);


  }




}
