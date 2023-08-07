import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/service/libros.service';
import { ListaLecturaService } from 'src/app/service/lista-lectura.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  libros: any[] = [];
  librosF: any[] = [];
  librosLista: any[] = [];
  numMaximoPagina: number = 0;
  numMinimoPagina: number = 0;
  rango: number = this.numMaximoPagina; // Valor inicial del rango
  opcionSeleccionada: string = 'Todas';
  constructor(private bookS: LibrosService, private listaS: ListaLecturaService) {

  }
  ngOnInit(): void {
    this.libros = this.bookS.devolverTodos();
    this.numMaximoPagina = this.bookS.maxPaginas();
    this.numMinimoPagina = this.bookS.minPaginas();
    this.librosF = this.libros;
    this.librosLista = this.listaS.obtenerLista();
    console.log(this.librosLista);
    this.rango = this.numMaximoPagina;
  }


  filtrarDatos() {

    this.librosF = this.libros.filter(libro => libro.book.pages > this.rango);
    console.log(this.rango);
  }

  filtrarTipo() {
    if (this.opcionSeleccionada !== 'Todas') {
      this.librosF = this.libros.filter(libro =>
        libro.book.genre === this.opcionSeleccionada
        );
    } else {
      this.librosF = this.libros;
    }

  }


  isAmpliado: boolean = false;

  cambiarTamanio() {
    this.isAmpliado = !this.isAmpliado;
  }
  accionLista(libro:any) {
    const existe = this.librosLista.some(item => item.book.title === libro.book.title);
    if(!existe){
      this.listaS.aniadirLibro(libro);
    }else{
      this.quitar(libro);
    }
  }

  quitar(libro:any) {
    const indice = this.librosLista.indexOf(libro);
    this.listaS.quitarLibroDeLista(indice);
  }

  estaEnLista(libro: any): boolean {
    return this.librosLista.some(item => item.book.title === libro.book.title);
}
}
