import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@IonicPage()
@Component({
  selector: 'page-prodotti-idonei',
  templateUrl: 'prodotti-idonei.html',
})
export class ProdottiIdoneiPage {
  prodottiListFor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
   
  }

  prodottiAssortiti=[];
  visualizzaProdotti=[];

  addCat(){
    this.http.get('http://192.168.1.136:8080/addCatalogo' ).pipe(
        map(res => res.json())
      ).subscribe(response => {
        console.log('Catalogo Aggiornato');
      
    });
  }

  ionViewDidLoad() {
    this.http.get('http://192.168.1.136:8080/prodottiIdonei' ).pipe(
        map(res => res.json())
      ).subscribe(productList => {
      for(var x in productList.Prodotti){
        this.visualizzaProdotti[x]=productList.Prodotti[x];
        console.log("Oggetto nell indice: ",x + " ",this.visualizzaProdotti[x]);
      
      }      
    });
  }

}
