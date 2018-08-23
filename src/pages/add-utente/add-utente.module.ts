import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddUtentePage } from './add-utente';

@NgModule({
  declarations: [
    AddUtentePage,
  ],
  imports: [
    IonicPageModule.forChild(AddUtentePage),
  ],
})
export class AddUtentePageModule {}
