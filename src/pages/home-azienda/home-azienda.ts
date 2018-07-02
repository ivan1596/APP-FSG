import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdottiPage } from '../prodotti/prodotti';



@IonicPage()
@Component({
  selector: 'page-home-azienda',
  templateUrl: 'home-azienda.html',
})
export class HomeAziendaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToProdotti(){
    this.navCtrl.push(ProdottiPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAziendaPage');
  }

}
