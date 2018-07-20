import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeWorkPage } from '../home-work/home-work';
import { HomeAziendaPage } from '../home-azienda/home-azienda';
import { AdminHomePage } from '../admin-home/admin-home'
import { HomeUtentePage } from '../home-utente/home-utente';


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
    const impiegato_user = {
      user:"impiegato",
      password: "impiegato"
    };

    const azienda_user = {
      user:"azienda",
      password: "azienda"
    };

    const admin_user = {
      user:"admin",
      password: "admin"
    };

    const utente_user = {
      user:"utente",
      password: "utente"
    };





    var user= this.username;
    var psw = this.password;
  
     switch(user && psw){
        case  impiegato_user.user && impiegato_user.password:
          this.navCtrl.push(HomeWorkPage);
          break;
        case azienda_user.user && azienda_user.password:
          this.navCtrl.push(HomeAziendaPage);
          break;
        case admin_user.user && admin_user.password:
          this.navCtrl.push(AdminHomePage);
          break;
        case utente_user.user && utente_user.password:
          this.navCtrl.push(HomeUtentePage);
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
