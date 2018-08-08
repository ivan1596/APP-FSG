import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomeWorkPage } from '../pages/home-work/home-work';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HttpModule, JsonpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProdottiPage } from '../pages/prodotti/prodotti';
import { HomeAziendaPage } from '../pages/home-azienda/home-azienda';
import { AdminHomePage } from '../pages/admin-home/admin-home';
import {PuntiRitiroPage} from '../pages/punti-ritiro/punti-ritiro';
import {ProdottiIdoneiPage} from '../pages/prodotti-idonei/prodotti-idonei';
import {AddRitiroPage} from '../pages/add-ritiro/add-ritiro';
import {HomeUtentePage} from '../pages/home-utente/home-utente';
import {CatalogoPage} from '../pages/catalogo/catalogo';
import {OrdinaProdottiPage } from '../pages/ordina-prodotti/ordina-prodotti';
import {ConfermaOrdinePage } from '../pages/conferma-ordine/conferma-ordine';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomeWorkPage,
    ProdottiPage,
    HomeAziendaPage,
    AdminHomePage,
    PuntiRitiroPage,
    ProdottiIdoneiPage,
    AddRitiroPage,
    HomeUtentePage,
    CatalogoPage,
    OrdinaProdottiPage,
    ConfermaOrdinePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomeWorkPage,
    ProdottiPage,
    HomeAziendaPage,
    AdminHomePage,
    PuntiRitiroPage,
    ProdottiIdoneiPage,
    AddRitiroPage,
    HomeUtentePage,
    CatalogoPage,
    OrdinaProdottiPage,
    ConfermaOrdinePage

  ],
  providers: [
    StatusBar,
    Camera,
    BarcodeScanner,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
