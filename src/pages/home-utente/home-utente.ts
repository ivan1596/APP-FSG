import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CatalogoPage } from '../catalogo/catalogo';

/**
 * Generated class for the HomeUtentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-utente',
  templateUrl: 'home-utente.html',
})
export class HomeUtentePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  visCatalogo(){
    this.navCtrl.push(CatalogoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeUtentePage');
  }

}
