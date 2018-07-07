import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the AddRitiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-ritiro',
  templateUrl: 'add-ritiro.html',
})
export class AddRitiroPage {
  data:any={}; 
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.data.città='';
    this.data.Via='';
    this.data.CAP='';
  }
  inserisciPuntiRitiro(città:any,Via:any,CAP:any){
    this.data.città=città;
    this.data.Via=Via;
    this.data.CAP=CAP;
    var dataStringed = JSON.stringify(this.data);
    console.log('data vale: ',dataStringed);
    var datiPuntoRitiro = JSON.stringify({città,Via,CAP});
    this.http.post('http://localhost:8080/inserisciPuntiRitiro', datiPuntoRitiro)
  .subscribe(data => {
  console.log('data log: ',data);
  //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
  console.log('response: ',this.data.response);
  }, error => {
  console.log('Oooops!');
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRitiroPage');
  }

}
