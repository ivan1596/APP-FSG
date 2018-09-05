import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the HomeWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-work',
  templateUrl: 'home-work.html',
})
export class HomeWorkPage {
  data:any={};
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public barcodeScanner: BarcodeScanner,public http:Http) {
this.data.nomeProdotto = '';
this.data.codice ='';
this.data.myDate='';
this.data.response='';
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Hai aggiunto al db: '+this.data.nomeProdotto,
      duration: 3000
    });
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeWorkPage');
  }
  inserisciProdotto(nomeProdotto:any,codiceProdotto:any,myDate:any){
   /*this.http.post('http://localhost:8080/inserisciProdotti').map(res =>res.json()).subscribe(data=>{console.log(data);
  });*/
  this.data.nomeProdotto=nomeProdotto;
  this.data.codice=codiceProdotto;
  this.data.myDate=myDate;
  this.presentToast();
  //console.log('data vale: ',data); in questo modo ci stampa l'oggetto inserito tramite stringifly
  console.log('il nome di this.data è: ',this.data.nomeProdotto);
  var dataStringed = JSON.stringify(this.data.myDate);
  console.log('dataStringed di this.data è: ',dataStringed);
  console.log('la data di this.data è: ',this.data.myDate);
  var dataScadenza=this.data.myDate.day+'/'+this.data.myDate.month+'/'+this.data.myDate.year;
  console.log('datascadenza: ',dataScadenza);
  var datiProdotto = JSON.stringify({nomeProdotto,codiceProdotto,dataScadenza});
  console.log('la var datiProdotto vale:  ', datiProdotto);
  this.http.post('http://192.168.1.136:8080/inserisciProdotti', datiProdotto)
.subscribe(data => {
console.log('data log: ',data);
//https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
console.log('response: ',this.data.response);

}, error => {
console.log('Oooops!');
});
  }

  codice:any;
  scansiona(){
    this.codice={};
    this.barcodeScanner.scan().then(barcodeData => {
      this.codice = barcodeData.text;
      console.log('Barcode data', this.codice);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}

