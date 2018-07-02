import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeAziendaPage } from './home-azienda';

@NgModule({
  declarations: [
    HomeAziendaPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeAziendaPage),
  ],
})
export class HomeAziendaPageModule {}
