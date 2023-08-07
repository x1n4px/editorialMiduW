import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaLecturaService {
  libros: any[] = [];

  constructor( ) {
    this.recuperarLista();
   }

  guardarLista(){
    localStorage.setItem('lista', JSON.stringify(this.libros));
  }

  private recuperarLista(){
    const lista = localStorage.getItem('lista');
    if(lista) {
      this.libros = JSON.parse(lista);
    }else{
      this.libros = [];
    }

  }

  obtenerLista() {
    return this.libros;
  }

  aniadirLibro(libro:any) {
    this.libros.push(libro);
    this.guardarLista();
  }

  quitarLibroDeLista(index:number) {
    this.libros.splice(index, 1);
    this.guardarLista();
  }
}
