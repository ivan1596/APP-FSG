import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PuntiRitiroPage } from '../punti-ritiro/punti-ritiro';
import {ProdottiIdoneiPage} from '../prodotti-idonei/prodotti-idonei';
import {ProdottiPage} from '../prodotti/prodotti';

/**
 * Generated class for the AdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPuntiRitiroPortale(){
    this.navCtrl.push(PuntiRitiroPage);
  }

  goToProdottiPortale(){
    this.navCtrl.push(ProdottiIdoneiPage);
  }
  goToProdottiIdonei(){
    this.navCtrl.push(ProdottiIdoneiPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHomePage');
  }

}
