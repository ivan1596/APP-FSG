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

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomeWorkPage,
    ProdottiPage,
    
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
