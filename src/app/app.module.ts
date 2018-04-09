import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// COMPONENTES
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';


// SERVICIOS
import { ListaDeseosService } from './services/lista-deseos.service';

//PIPES
import { PlaceHolderPipe } from './pipes/placeholder.pipe';
import { SlicerPipe } from './pipes/slicer.pipe';

@NgModule({
  declarations: [
    MyApp,
    PlaceHolderPipe,
    SlicerPipe,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    ListaDeseosService,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
