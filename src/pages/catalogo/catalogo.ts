import { Component } from '@angular/core';
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

  ionViewDidLoad() {
    this.http.get('http://localhost:8080/getCatalogo' ).pipe(
      map(res => res.json())
    ).subscribe(productList => {
    for(var x in productList.Prodotti){
      this.visualizzaProdotti[x]=productList.Prodotti[x];
      console.log("Oggetto nell indice: ",x + " ",this.visualizzaProdotti[x]);
    }      
  });
  }

}
