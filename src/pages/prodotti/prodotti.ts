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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }


  prodottiAssortiti=[];
  visProd(){
      this.http.get('http://localhost:8080/prodotti' ).pipe(
            map(res => res.json())
        ).subscribe(prodotti => {
          console.log(prodotti)
         // console.log( res.json())
            this.prodottiAssortiti=prodotti;
            console.log('GET Response:', this.prodottiAssortiti);
        });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdottiPage');
  }

}
