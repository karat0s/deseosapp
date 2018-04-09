import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = []

  constructor() {

    this.cargarDatos();
    console.log("servicio inicializado");
  }

  actualizarLista() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarDatos() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }

  agregarLista(lista: Lista) {
    this.listas.push(lista);
    this.actualizarLista();
  }


}
