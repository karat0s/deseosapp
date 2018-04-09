import { Component, OnInit } from '@angular/core';
import { ListaItem } from '../../app/clases/lista-item';
import { Lista } from '../../app/clases/listas';
import { AlertController, NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';
@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista: string = "";
  nombreItem: string = "";
  items: ListaItem[] = [];
  ocultarItems: boolean = false;

  constructor(private alert: AlertController, public navCntrl: NavController, public listaDeseosService: ListaDeseosService) { }

  agregar() {

    if (this.nombreItem.length == 0 || this.nombreLista.length == 0) {
      let alert = this.alert.create({
        title: 'Error',
        subTitle: 'Antes de poder crear la tarea, tienes que rellenar todos los campos correctamente',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    this.ocultarItems = true

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);
    this.nombreItem = "";

  }

  eliminar(index) {
    // index y posiciones a eliminar
    this.items.splice(index, 1);

    if (this.items.length == 0) {
      this.ocultarItems = false;
    }

  }

  guardarLista() {

    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    this.listaDeseosService.agregarLista(lista);
    //Volver atrás
    this.navCntrl.pop();
  }


  ngOnInit() { }
}
