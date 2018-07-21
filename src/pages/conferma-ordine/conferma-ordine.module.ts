import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfermaOrdinePage } from './conferma-ordine';

@NgModule({
  declarations: [
    ConfermaOrdinePage,
  ],
  imports: [
    IonicPageModule.forChild(ConfermaOrdinePage),
  ],
})
export class ConfermaOrdinePageModule {}
