import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeWorkPage } from '../home-work/home-work';
import { ProdottiPage } from '../prodotti/prodotti';
//import { NgModel } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username = {}
  password = {}
  logForm() {
    console.log(this.username )
    console.log(this.password)

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHome(){
    const admin_user = {
      user:"admin",
      password: "admin"
    };

    const azienda_user = {
      user:"azienda",
      password: "azienda"
    };

    var user= this.username;
    var psw = this.password;
  
     switch(user && psw){
        case  admin_user.user && admin_user.password:
          this.navCtrl.push(HomeWorkPage);
          break;
        case azienda_user.user && azienda_user.password:
          this.navCtrl.push(ProdottiPage);
          break;
        default: 
          /*this.navCtrl.push(LoginPage); */
          break;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
