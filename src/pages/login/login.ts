import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeWorkPage } from '../home-work/home-work';
import { HomeAziendaPage } from '../home-azienda/home-azienda';
import { AdminHomePage } from '../admin-home/admin-home'
import { HomeUtentePage } from '../home-utente/home-utente';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { map } from 'rxjs/operators';


//import { NgModel } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username :any = {}
  password :any = {}
  data:any={}
  loading:any;
  utenti:any=[];
  login =false;
  visualizzaUtenti:any =[];
  constructor( private loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: "Authenticating..."
    });
 
    this.loading.present();
 
  }
  logForm() {
    this.data.user=this.username;
    this.data.password=this.password;
    var dataStringed= JSON.stringify(this.data);
    this.http.post('http://192.168.1.136:8080/getLoginFormData',dataStringed )
    .subscribe(data => {
   
    }, error => {
    console.log('Oooops!');
    });
  

  }

 
  goToHome(){
    this.login=false;
    this.http.get('http://192.168.1.136:8080/getUtenti' ).pipe(
      map(res => res.json())
    ).subscribe(utentiList => {
    for(var x in utentiList.Utenti){
      this.visualizzaUtenti[x]=utentiList.Utenti[x];
      if (this.username == utentiList.Utenti[x].Username){
        console.log('userok');
        if(this.password==utentiList.Utenti[x].Password){
          console.log('user e pass controllate login ok');
          this.login=true;
          console.log('login vale',this.login);
          if(this.login=true){
            this.navCtrl.push(HomeUtentePage);
            this.login=false;
          }
        }
      }
      console.log('login vale: ',this.login);
        }      
  });
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
