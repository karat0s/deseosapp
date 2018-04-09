import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { Lista } from '../../app/clases/listas';


import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {

  mostrar: boolean = false;

  constructor(private listaDeseos: ListaDeseosService, private navCtrl: NavController, private lista: Lista) { }

  ngOnInit() { }

  irAgregar() {
    this.navCtrl.push(AgregarComponent);
  }

  verMas() {

    if (this.mostrar = false) {

    } else {

    }

  }

}
