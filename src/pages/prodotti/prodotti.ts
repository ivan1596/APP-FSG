import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-prodotti',
  templateUrl: 'prodotti.html',
})
export class ProdottiPage { 
  prodottiListFor: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private toastCtrl: ToastController) {
  }
  prodottiAssortiti=[];
  visualizzaProdotti=[];
  prodottiIdonei=[];
  CodProdottiIdonei=[];
  inviaProd(){
    console.log("Hai inviato i prodotti selezionati come idonei al server");
  }
  InserisciProdottiIdonei(CodIdo:any,prodottoIdo:any){
    console.log("Hai inserito ",CodIdo,"indicandolo come prodotto idoneo");
    console.log("Hai inserito il prodotto",  prodottoIdo,"indicandolo come idoneo");
    this.prodottiIdonei.push(prodottoIdo);
    this.CodProdottiIdonei.push(CodIdo);
    JSON.stringify(this.CodProdottiIdonei);
    this.http.post('http://localhost:8080/modIdoneo',this.CodProdottiIdonei ).pipe(
            map(res => res.json())
        ).subscribe(response => {
          console.log('POST Response:', response);
        });

        let toast = this.toastCtrl.create({
          message: "Elemento idoneo aggiunto nel DataBase",
          duration: 3000,
          position: 'top'
        });
        toast.present();

    
  }
  
  
  ionViewDidLoad() {
       this.http.get('http://localhost:8080/prodotti' ).pipe(
        map(res => res.json())
      ).subscribe(productList => {
      for(var x in productList.Prodotti){
        this.visualizzaProdotti[x]=productList.Prodotti[x];
        console.log("Oggetto nell indice: ",x + " ",this.visualizzaProdotti[x]);
      
      }      
    });
  }

}
