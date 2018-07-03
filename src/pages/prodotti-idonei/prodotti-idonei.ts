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

  ionViewDidLoad() {
    this.http.get('http://localhost:8080/prodottiIdonei' ).pipe(
        map(res => res.json())
      ).subscribe(productList => {
      for(var x in productList.Prodotti){
        this.visualizzaProdotti[x]=productList.Prodotti[x];
        console.log("Oggetto nell indice: ",x + " ",this.visualizzaProdotti[x]);
      
      }      
    });
  }

}
