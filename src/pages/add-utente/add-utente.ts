import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AddUtentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-utente',
  templateUrl: 'add-utente.html',
})
export class AddUtentePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl: ToastController) {
  }
  data = {};
  

  inserisciUtente(email,psw){
    var datiUtente = JSON.stringify({email,psw});
    this.http.post('http://localhost:8080/addUtente', datiUtente)
    .subscribe(data => {
    console.log('data log: ',datiUtente);
    //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
    //console.log('response: ',this.data.response);
    }, error => {
    console.log('Oooops!');
    });
    this.presentToast();
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Utente aggiunto con successo',
      duration: 3000
    });
    toast.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUtentePage');
  }

}
