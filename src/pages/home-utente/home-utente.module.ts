import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeUtentePage } from './home-utente';

@NgModule({
  declarations: [
    HomeUtentePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeUtentePage),
  ],
})
export class HomeUtentePageModule {}
