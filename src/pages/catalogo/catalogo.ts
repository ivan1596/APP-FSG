import { Component } from '@angular/core';
import { OrdinaProdottiPage } from '../ordina-prodotti/ordina-prodotti';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

/**
 * Generated class for the CatalogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }
  visualizzaProdotti=[];
  prodottiOrdinati=[];
  scegliPuntiRitiro(){
    console.log("vado alla pagina che mostra i punti di ritiro per i prodotti");
     this.navCtrl.push(OrdinaProdottiPage,{
      data:this.prodottiOrdinati 
    });
  }
  inserisciProdottiOrdinati(Prodotto:any){
    console.log("prodotto che arriva da catalogo html,"+Prodotto.nome,Prodotto.datascadenza,Prodotto.codice);
   this.prodottiOrdinati.push(Prodotto);
    for(var x in this.prodottiOrdinati){
      console.log("Oggetto nell indice: ",x + " ",this.prodottiOrdinati[x]);
    } 
  }
  ionViewDidLoad() {
    this.http.get('http://192.168.1.136:8080/getCatalogo' ).pipe(
      map(res => res.json())
    ).subscribe(productList => {
    for(var x in productList.Prodotti){
      this.visualizzaProdotti[x]=productList.Prodotti[x];
      console.log("Oggetto nell indice: ",x + " ",this.visualizzaProdotti[x]);
    }      
  });
  }

}
