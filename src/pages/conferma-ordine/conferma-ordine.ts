import { Component } from '@angular/core';
import {LoginPage} from '../login/login';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ConfermaOrdinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conferma-ordine',
  templateUrl: 'conferma-ordine.html',
})
export class ConfermaOrdinePage {
  puntoRitiro: any;
  prodottiOrdinati=[];
  prodotti=[];
  backHome:boolean;
  nomePuntoRitiro:string;
  viaPuntoRitiro:string;
  capPuntoRitiro:string;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
    this.puntoRitiro= navParams.get('data');
    this.prodottiOrdinati=navParams.get('prodotti');
    this.prodotti.push(this.prodottiOrdinati);
    console.log("var nuova:",this.prodotti);
    console.log("prodotti ordinati:" ,this.prodottiOrdinati);
    console.log("pr conferma ordine",this.puntoRitiro);
    this.nomePuntoRitiro=this.puntoRitiro[0].citta;
    this.viaPuntoRitiro=this.puntoRitiro[0].Via;
    this.capPuntoRitiro=this.puntoRitiro[0].Cap;
    
  }
   showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Ordine Confermato!',
      subTitle: 'Grazie hai confermato l ordine!',
     buttons: [
        {
          text: 'Torna alla home',
          handler: data => {
            this.backHome=true;
            console.log("backhome vale: ",this.backHome)
            console.log('tonrA alla home clicked');
            this.navCtrl.push(LoginPage);
          }
        },
      ]
      
    });
    
    alert.present();
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ConfermaOrdinePage');
  }

}
