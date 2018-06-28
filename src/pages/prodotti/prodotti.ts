import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
/**
 * Generated class for the ProdottiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prodotti',
  templateUrl: 'prodotti.html',
})
export class ProdottiPage { 
  prodottiListFor: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }
  prodottiAssortiti=[];
  visualizzaProdotti=[];
  prodottiInseriti=[];
  inviaProd(){
    console.log("Hai inviato i prodotti selezionati come idonei al server");
  }
  InserisciProdottiIdonei(Oggetto:any){
    console.log("Hai inserito ",Oggetto.nome," (Codice: ",Oggetto.codice," )indicandolo come prodotto idoneo");
    this.prodottiInseriti.push(Oggetto);
    //console.log("l'array prodotti inseriti [0] vale: ",this.prodottiInseriti[0]);
  }
  visProd(){
      //req di productList
      this.http.get('http://localhost:8080/prodotti' ).pipe(
          map(res => res.json())
      ).subscribe(productList => {
        //console.log("productList object",productList);
        //this.visualizzaProdotti.push(productList.Prodotti[0]);
        for(var x in productList.Prodotti){
          this.visualizzaProdotti[x]=productList.Prodotti[x];
          console.log("Oggetto nell indice: ",x+" ",this.visualizzaProdotti[x]);
          //console.log("vidsualizzaProdotti nome nell'indice: ",x+" ",this.visualizzaProdotti[x].nome);
          //console.log("visualizzaProdotti codice nell'indice: ",x+" ",this.visualizzaProdotti[x].codice);
          //console.log("visualizzaProdotti scadenza nell'indice: ",x+" ",this.visualizzaProdotti[x].datascadenza);
        }      
      });       
  }  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdottiPage');
       //req di productList
       this.http.get('http://localhost:8080/prodotti' ).pipe(
        map(res => res.json())
    ).subscribe(productList => {
      //console.log("productList object",productList);
      //this.visualizzaProdotti.push(productList.Prodotti[0]);
      for(var x in productList.Prodotti){
        this.visualizzaProdotti[x]=productList.Prodotti[x];
        console.log("Oggetto nell indice: ",x+" ",this.visualizzaProdotti[x]);
        //console.log("vidsualizzaProdotti nome nell'indice: ",x+" ",this.visualizzaProdotti[x].nome);
        //console.log("visualizzaProdotti codice nell'indice: ",x+" ",this.visualizzaProdotti[x].codice);
        //console.log("visualizzaProdotti scadenza nell'indice: ",x+" ",this.visualizzaProdotti[x].datascadenza);
      }      
    });
  }

}
