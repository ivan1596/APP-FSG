import { Component } from '@angular/core';
import { ConfermaOrdinePage } from '../conferma-ordine/conferma-ordine';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
/**
 * Generated class for the OrdinaProdottiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordina-prodotti',
  templateUrl: 'ordina-prodotti.html',
})
export class OrdinaProdottiPage {
 prodottiOrdinati: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.prodottiOrdinati=navParams.get('data');
    console.log("I prodotti ordinati sono: ",this.prodottiOrdinati);
  }
  puntiRitiroList=[];
  citta=[];
  puntoritiroSelezionato=[]; 
  inserisciProdottiOrdinati(puntoSelezionato:any){
   this.puntoritiroSelezionato.push(puntoSelezionato);
   console.log("punto ritiro selezionato: ",this.puntoritiroSelezionato);
   this.navCtrl.push(ConfermaOrdinePage,{
      data: this.puntoritiroSelezionato,
      prodotti:this.prodottiOrdinati
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdinaProdottiPage');
     this.http.get('http://192.168.1.136:8080/getPuntiRitiro' ).pipe(
      map(res => res.json())
    ).subscribe(productList => {
    for(var x in productList.Prodotti){
      this.puntiRitiroList[x]=productList.Prodotti[x];
      this.puntiRitiroList[x].citta=productList.Prodotti[x].Città;
      console.log("x calue di citta;",this.citta[x]);
      console.log("aadakhjdhakj;",this.puntiRitiroList[x].citta);
      console.log("PuntoRitiro nell'indice :  ",x + " è: ",this.puntiRitiroList[x]);
    }      
  });
  }

}
