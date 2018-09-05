webpackJsonp([12],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRitiroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddRitiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddRitiroPage = /** @class */ (function () {
    function AddRitiroPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.data = {};
        this.data.città = '';
        this.data.Via = '';
        this.data.CAP = '';
    }
    AddRitiroPage.prototype.inserisciPuntiRitiro = function (città, Via, CAP) {
        var _this = this;
        this.data.città = città;
        this.data.Via = Via;
        this.data.CAP = CAP;
        var dataStringed = JSON.stringify(this.data);
        console.log('data vale: ', dataStringed);
        var datiPuntoRitiro = JSON.stringify({ città: città, Via: Via, CAP: CAP });
        this.http.post('http://192.168.1.136:8080/inserisciPuntiRitiro', datiPuntoRitiro)
            .subscribe(function (data) {
            console.log('data log: ', data);
            //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
            console.log('response: ', _this.data.response);
        }, function (error) {
            console.log('Oooops!');
        });
    };
    AddRitiroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddRitiroPage');
    };
    AddRitiroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-ritiro',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\add-ritiro\add-ritiro.html"*/'<!--\n\n  Generated template for the AddRitiroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>AddRitiro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n<h1>Aggiungi un punto di ritiro</h1>\n\n<ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Città</ion-label>\n\n      <ion-input  #citta></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Via</ion-label>\n\n      <ion-input  #Via></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>CAP</ion-label>\n\n        <ion-input  #CAP></ion-input>\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n  <button ion-button full (click)="inserisciPuntiRitiro(citta.value,Via.value,CAP.value)" >Inserisci Punto Ritiro</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\add-ritiro\add-ritiro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AddRitiroPage);
    return AddRitiroPage;
}());

//# sourceMappingURL=add-ritiro.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUtentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddUtentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddUtentePage = /** @class */ (function () {
    function AddUtentePage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.data = {};
    }
    AddUtentePage.prototype.inserisciUtente = function (email, psw) {
        var datiUtente = JSON.stringify({ email: email, psw: psw });
        this.http.post('http://192.168.1.136:8080/addUtente', datiUtente)
            .subscribe(function (data) {
            console.log('data log: ', datiUtente);
            //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
            //console.log('response: ',this.data.response);
        }, function (error) {
            console.log('Oooops!');
        });
        this.presentToast();
    };
    AddUtentePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Utente aggiunto con successo',
            duration: 3000
        });
        toast.present();
    };
    AddUtentePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddUtentePage');
    };
    AddUtentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-utente',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\add-utente\add-utente.html"*/'<!--\n\n  Generated template for the AddUtentePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Aggiungi Utente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h1>Aggiungi un Utente</h1>\n\n    <ion-list>\n\n    \n\n        <ion-item>\n\n          <ion-label floating>E-Mail</ion-label>\n\n          <ion-input  #email></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label floating>Password</ion-label>\n\n          <ion-input  #password></ion-input>\n\n        </ion-item>\n\n    \n\n      \n\n      </ion-list>\n\n      <button ion-button full (click)="inserisciUtente(email.value,password.value)" >Inserisci Utente</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\add-utente\add-utente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], AddUtentePage);
    return AddUtentePage;
}());

//# sourceMappingURL=add-utente.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordina_prodotti_ordina_prodotti__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CatalogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CatalogoPage = /** @class */ (function () {
    function CatalogoPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.visualizzaProdotti = [];
        this.prodottiOrdinati = [];
    }
    CatalogoPage.prototype.scegliPuntiRitiro = function () {
        console.log("vado alla pagina che mostra i punti di ritiro per i prodotti");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__ordina_prodotti_ordina_prodotti__["a" /* OrdinaProdottiPage */], {
            data: this.prodottiOrdinati
        });
    };
    CatalogoPage.prototype.inserisciProdottiOrdinati = function (Prodotto) {
        console.log("prodotto che arriva da catalogo html," + Prodotto.nome, Prodotto.datascadenza, Prodotto.codice);
        this.prodottiOrdinati.push(Prodotto);
        for (var x in this.prodottiOrdinati) {
            console.log("Oggetto nell indice: ", x + " ", this.prodottiOrdinati[x]);
        }
    };
    CatalogoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://192.168.1.136:8080/getCatalogo').pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (productList) {
            for (var x in productList.Prodotti) {
                _this.visualizzaProdotti[x] = productList.Prodotti[x];
                console.log("Oggetto nell indice: ", x + " ", _this.visualizzaProdotti[x]);
            }
        });
    };
    CatalogoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-catalogo',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\catalogo\catalogo.html"*/'<!--\n\n  Generated template for the CatalogoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Catalogo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list >\n\n        <ion-item *ngFor="let visualizzaProdottiCompleti of visualizzaProdotti">\n\n          <ion-card>\n\n             \n\n            <ion-card-header>\n\n             <b>{{visualizzaProdottiCompleti.nome}}</b>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n               <b>DataScadenza: </b><p>{{ visualizzaProdottiCompleti.datascadenza}}</p>\n\n               <b>CodiceProdotto: </b> <p>{{ visualizzaProdottiCompleti.codice}}</p>\n\n               <ion-item>\n\n                   <ion-radio  value="Ordina" (click)="inserisciProdottiOrdinati(visualizzaProdottiCompleti)"></ion-radio>\n\n                </ion-item>\n\n            </ion-card-content>\n\n         \n\n          </ion-card> \n\n        </ion-item>\n\n       </ion-list>\n\n <button ion-button full color="light" (click)="scegliPuntiRitiro()">Ordina Prodotto/i</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\catalogo\catalogo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], CatalogoPage);
    return CatalogoPage;
}());

//# sourceMappingURL=catalogo.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdinaProdottiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conferma_ordine_conferma_ordine__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OrdinaProdottiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdinaProdottiPage = /** @class */ (function () {
    function OrdinaProdottiPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.puntiRitiroList = [];
        this.citta = [];
        this.puntoritiroSelezionato = [];
        this.prodottiOrdinati = navParams.get('data');
        console.log("I prodotti ordinati sono: ", this.prodottiOrdinati);
    }
    OrdinaProdottiPage.prototype.inserisciProdottiOrdinati = function (puntoSelezionato) {
        this.puntoritiroSelezionato.push(puntoSelezionato);
        console.log("punto ritiro selezionato: ", this.puntoritiroSelezionato);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__conferma_ordine_conferma_ordine__["a" /* ConfermaOrdinePage */], {
            data: this.puntoritiroSelezionato,
            prodotti: this.prodottiOrdinati
        });
    };
    OrdinaProdottiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OrdinaProdottiPage');
        this.http.get('http://192.168.1.136:8080/getPuntiRitiro').pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (productList) {
            for (var x in productList.Prodotti) {
                _this.puntiRitiroList[x] = productList.Prodotti[x];
                _this.puntiRitiroList[x].citta = productList.Prodotti[x].Città;
                console.log("x calue di citta;", _this.citta[x]);
                console.log("aadakhjdhakj;", _this.puntiRitiroList[x].citta);
                console.log("PuntoRitiro nell'indice :  ", x + " è: ", _this.puntiRitiroList[x]);
            }
        });
    };
    OrdinaProdottiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ordina-prodotti',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\ordina-prodotti\ordina-prodotti.html"*/'<!--\n\n  Generated template for the OrdinaProdottiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Punti di ritiro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-list>\n\n  \n\n  <ion-item *ngFor="let visualizzaPuntiRitiro of puntiRitiroList;let visualizzaCitta of citta; let i = index;">\n\n    <ion-card>\n\n\n\n      <img src="assets/imgs/eurospin.jpeg">\n\n      <ion-fab right top>\n\n        <button ion-fab value="SelezionaPuntoritiro" (click)="inserisciProdottiOrdinati(visualizzaPuntiRitiro)">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n    \n\n      <ion-item>\n\n        <ion-icon name="cart" item-start large></ion-icon>\n\n        <h2>{{visualizzaPuntiRitiro.citta}}</h2>\n\n        <p>{{visualizzaPuntiRitiro.Via}}</p>\n\n        <p>{{visualizzaPuntiRitiro.Cap}}</p>\n\n      </ion-item>    \n\n    </ion-card>\n\n    \n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\ordina-prodotti\ordina-prodotti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], OrdinaProdottiPage);
    return OrdinaProdottiPage;
}());

//# sourceMappingURL=ordina-prodotti.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfermaOrdinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ConfermaOrdinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfermaOrdinePage = /** @class */ (function () {
    function ConfermaOrdinePage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prodottiOrdinati = [];
        this.prodotti = [];
        this.puntoRitiro = navParams.get('data');
        this.prodottiOrdinati = navParams.get('prodotti');
        this.prodotti.push(this.prodottiOrdinati);
        console.log("var nuova:", this.prodotti);
        console.log("prodotti ordinati:", this.prodottiOrdinati);
        console.log("pr conferma ordine", this.puntoRitiro);
        this.nomePuntoRitiro = this.puntoRitiro[0].citta;
        this.viaPuntoRitiro = this.puntoRitiro[0].Via;
        this.capPuntoRitiro = this.puntoRitiro[0].Cap;
    }
    ConfermaOrdinePage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Ordine Confermato!',
            subTitle: 'Grazie hai confermato l ordine!',
            buttons: [
                {
                    text: 'Torna alla home',
                    handler: function (data) {
                        _this.backHome = true;
                        console.log("backhome vale: ", _this.backHome);
                        console.log('tonrA alla home clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
                    }
                },
            ]
        });
        alert.present();
    };
    ConfermaOrdinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfermaOrdinePage');
    };
    ConfermaOrdinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conferma-ordine',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\conferma-ordine\conferma-ordine.html"*/'<!--\n\n  Generated template for the ConfermaOrdinePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>confermaOrdine</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content >\n\n \n\n  <ion-list>\n\n <ion-card>\n\n  <ion-card-header>\n\n   <b>Città punto ritiro scelto : {{nomePuntoRitiro}}</b>\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n   <b>Via: </b><p>{{viaPuntoRitiro}}</p>\n\n  <b>Cap: </b> <p>{{capPuntoRitiro}}</p>\n\n  </ion-card-content>\n\n</ion-card> \n\n</ion-list>\n\n<ion-list >\n\n  <ion-item *ngFor="let visualizzaProdottiOrdinati of prodottiOrdinati">\n\n  <ion-card>\n\n   <ion-card-header>\n\n   <b>Hai ordinato questo prodotto:</b><p>{{visualizzaProdottiOrdinati.nome}}</p>\n\n   </ion-card-header>\n\n   <ion-card-content>\n\n  <b>DataScadenza: </b><p>{{visualizzaProdottiOrdinati.datascadenza}}</p>\n\n  <b>CodiceProdotto: </b> <p>{{visualizzaProdottiOrdinati.codice}}</p>\n\n  </ion-card-content>\n\n    </ion-card> \n\n  </ion-item>\n\n</ion-list>\n\n     <button ion-button full color="light" (click)=" showAlert()">Conferma Ordine</button>  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\conferma-ordine\conferma-ordine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], ConfermaOrdinePage);
    return ConfermaOrdinePage;
}());

//# sourceMappingURL=conferma-ordine.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HomeWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeWorkPage = /** @class */ (function () {
    function HomeWorkPage(navCtrl, navParams, barcodeScanner, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.http = http;
        this.data = {};
        this.data.nomeProdotto = '';
        this.data.codice = '';
        this.data.myDate = '';
        this.data.response = '';
    }
    HomeWorkPage.prototype.inserisciProdotto = function (nomeProdotto, codiceProdotto, myDate) {
        var _this = this;
        /*this.http.post('http://localhost:8080/inserisciProdotti').map(res =>res.json()).subscribe(data=>{console.log(data);
       });*/
        this.data.nomeProdotto = nomeProdotto;
        this.data.codice = codiceProdotto;
        this.data.myDate = myDate;
        //console.log('data vale: ',data); in questo modo ci stampa l'oggetto inserito tramite stringifly
        console.log('il nome di this.data è: ', this.data.nomeProdotto);
        var dataStringed = JSON.stringify(this.data.myDate);
        console.log('dataStringed di this.data è: ', dataStringed);
        console.log('la data di this.data è: ', this.data.myDate);
        var dataScadenza = this.data.myDate.day + '/' + this.data.myDate.month + '/' + this.data.myDate.year;
        console.log('datascadenza: ', dataScadenza);
        var datiProdotto = JSON.stringify({ nomeProdotto: nomeProdotto, codiceProdotto: codiceProdotto, dataScadenza: dataScadenza });
        console.log('la var datiProdotto vale:  ', datiProdotto);
        this.http.post('http://192.168.1.136:8080/inserisciProdotti', datiProdotto)
            .subscribe(function (data) {
            console.log('data log: ', data);
            //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
            console.log('response: ', _this.data.response);
        }, function (error) {
            console.log('Oooops!');
        });
    };
    HomeWorkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeWorkPage');
    };
    HomeWorkPage.prototype.scansiona = function () {
        var _this = this;
        this.codice = {};
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.codice = barcodeData.text;
            console.log('Barcode data', _this.codice);
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    HomeWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-work',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\home-work\home-work.html"*/'<!--\n\n  Generated template for the HomeWorkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>HomeWork</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n     <!-- <form (ngSubmit)="productForm()">-->\n\n        <ion-item>\n\n          <ion-label floating>Nome Prodotto</ion-label>\n\n          <!--<ion-input type="text" [(ngModel)]=“data.username”></ion-input>-->\n\n          <ion-input  #nomeProdotto></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>Codice</ion-label>\n\n          <ion-input type="text" value="{{codice}}" #codiceProdotto></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n            <ion-label floating>Data Scadenza</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" #myDate></ion-datetime>\n\n            \n\n        </ion-item>\n\n       \n\n       \n\n      <!--</form>-->\n\n        <button ion-button full (click)="inserisciProdotto(nomeProdotto.value,codiceProdotto.value,myDate.value)">AGGIUNGI PRODOTTO</button>\n\n        <button ion-button full (click)="scansiona()">SCANSIONA PRODOTTO</button>\n\n      \n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\home-work\home-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], HomeWorkPage);
    return HomeWorkPage;
}());

//# sourceMappingURL=home-work.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAziendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prodotti_prodotti__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_ritiro_add_ritiro__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeAziendaPage = /** @class */ (function () {
    function HomeAziendaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeAziendaPage.prototype.goToProdotti = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__prodotti_prodotti__["a" /* ProdottiPage */]);
    };
    HomeAziendaPage.prototype.goToPuntiRitiro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_ritiro_add_ritiro__["a" /* AddRitiroPage */]);
    };
    HomeAziendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeAziendaPage');
    };
    HomeAziendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-azienda',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\home-azienda\home-azienda.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Home Azienda\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <h1>\n\n        Benvenuto nella home di gestione aziendale \n\n    </h1>\n\n\n\n    <button ion-button full (click)="goToProdotti()">Visualizza i prodotti</button>\n\n    <button ion-button full  (click)="goToPuntiRitiro()">Inserisci punti di ritiro</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\home-azienda\home-azienda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomeAziendaPage);
    return HomeAziendaPage;
}());

//# sourceMappingURL=home-azienda.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdottiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProdottiPage = /** @class */ (function () {
    function ProdottiPage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.prodottiAssortiti = [];
        this.visualizzaProdotti = [];
        this.prodottiIdonei = [];
        this.CodProdottiIdonei = [];
    }
    ProdottiPage.prototype.inviaProd = function () {
        console.log("Hai inviato i prodotti selezionati come idonei al server");
    };
    ProdottiPage.prototype.InserisciProdottiIdonei = function (CodIdo, prodottoIdo) {
        console.log("Hai inserito ", CodIdo, "indicandolo come prodotto idoneo");
        console.log("Hai inserito il prodotto", prodottoIdo, "indicandolo come idoneo");
        this.prodottiIdonei.push(prodottoIdo);
        this.CodProdottiIdonei.push(CodIdo);
        JSON.stringify(this.CodProdottiIdonei);
        this.http.post('http://192.168.1.136:8080/modIdoneo', this.CodProdottiIdonei).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (response) {
            console.log('POST Response:', response);
        });
        var toast = this.toastCtrl.create({
            message: "Elemento idoneo aggiunto nel DataBase",
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ProdottiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://192.168.1.136:8080/prodotti').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (productList) {
            for (var x in productList.Prodotti) {
                _this.visualizzaProdotti[x] = productList.Prodotti[x];
                console.log("Oggetto nell indice: ", x + " ", _this.visualizzaProdotti[x]);
            }
        });
    };
    ProdottiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prodotti',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\prodotti\prodotti.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Prodotti</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n      <ion-list >\n\n       <ion-item *ngFor="let visualizzaProdottiCompleti of visualizzaProdotti">\n\n         <ion-card>\n\n            \n\n           <ion-card-header>\n\n            <b>{{visualizzaProdottiCompleti.nome}}</b>\n\n           </ion-card-header>\n\n           <ion-card-content>\n\n              <b>DataScadenza: </b><p>{{ visualizzaProdottiCompleti.datascadenza}}</p>\n\n              <b>CodiceProdotto: </b> <p>{{ visualizzaProdottiCompleti.codice}}</p> \n\n              <b>Idoneo: </b> <p>{{ visualizzaProdottiCompleti.idoneo}}</p> \n\n              <ion-item>\n\n                  <ion-radio  value="Idoneo" (click)="InserisciProdottiIdonei(visualizzaProdottiCompleti.codice,visualizzaProdottiCompleti.nome)"></ion-radio>\n\n               </ion-item>\n\n           </ion-card-content>\n\n        \n\n         </ion-card>\n\n       \n\n       </ion-item>\n\n      </ion-list>\n\n \n\n     <button ion-button full color="light" (click)="inviaProd()">Invia Prodotti Idonei</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\prodotti\prodotti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ProdottiPage);
    return ProdottiPage;
}());

//# sourceMappingURL=prodotti.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prodotti_idonei_prodotti_idonei__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_utente_add_utente__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {ProdottiPage} from '../prodotti/prodotti';

/**
 * Generated class for the AdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminHomePage = /** @class */ (function () {
    function AdminHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminHomePage.prototype.goToAddUtente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_utente_add_utente__["a" /* AddUtentePage */]);
    };
    AdminHomePage.prototype.goToProdottiPortale = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__prodotti_idonei_prodotti_idonei__["a" /* ProdottiIdoneiPage */]);
    };
    AdminHomePage.prototype.goToProdottiIdonei = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__prodotti_idonei_prodotti_idonei__["a" /* ProdottiIdoneiPage */]);
    };
    AdminHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminHomePage');
    };
    AdminHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-home',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\admin-home\admin-home.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>AdminHome</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2>\n\n    Benvenuto nell\'interfaccia gestionale dell\'amministratore del portale\n\n  </h2>\n\n\n\n  <button ion-button full (click)="goToProdottiPortale()">Visualizza i prodotti del Portale</button>\n\n  <button ion-button full  (click)="goToAddUtente()">Inserisci Utente</button>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\admin-home\admin-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminHomePage);
    return AdminHomePage;
}());

//# sourceMappingURL=admin-home.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdottiIdoneiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProdottiIdoneiPage = /** @class */ (function () {
    function ProdottiIdoneiPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.prodottiAssortiti = [];
        this.visualizzaProdotti = [];
    }
    ProdottiIdoneiPage.prototype.addCat = function () {
        this.http.get('http://192.168.1.136:8080/addCatalogo').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (response) {
            console.log('Catalogo Aggiornato');
        });
    };
    ProdottiIdoneiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://192.168.1.136:8080/prodottiIdonei').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (productList) {
            for (var x in productList.Prodotti) {
                _this.visualizzaProdotti[x] = productList.Prodotti[x];
                console.log("Oggetto nell indice: ", x + " ", _this.visualizzaProdotti[x]);
            }
        });
    };
    ProdottiIdoneiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prodotti-idonei',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\prodotti-idonei\prodotti-idonei.html"*/'<!--\n\n  Generated template for the ProdottiIdoneiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ProdottiIdonei</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list >\n\n        <ion-item *ngFor="let visualizzaProdottiCompleti of visualizzaProdotti">\n\n          <ion-card>\n\n             \n\n            <ion-card-header>\n\n             <b>{{visualizzaProdottiCompleti.nome}}</b>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n               <b>DataScadenza: </b><p>{{ visualizzaProdottiCompleti.datascadenza}}</p>\n\n               <b>CodiceProdotto: </b> <p>{{ visualizzaProdottiCompleti.codice}}</p> \n\n               <b>Idoneo: </b> <p>{{ visualizzaProdottiCompleti.idoneo}}</p> \n\n              \n\n            </ion-card-content>\n\n         \n\n          </ion-card>\n\n        \n\n        </ion-item>\n\n       </ion-list>\n\n       <button ion-button (click)="addCat()">Aggiungi Al Catalogo</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\prodotti-idonei\prodotti-idonei.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ProdottiIdoneiPage);
    return ProdottiIdoneiPage;
}());

//# sourceMappingURL=prodotti-idonei.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeUtentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalogo_catalogo__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomeUtentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeUtentePage = /** @class */ (function () {
    function HomeUtentePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeUtentePage.prototype.visCatalogo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__catalogo_catalogo__["a" /* CatalogoPage */]);
    };
    HomeUtentePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeUtentePage');
    };
    HomeUtentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-utente',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\home-utente\home-utente.html"*/'<!--\n\n  Generated template for the HomeUtentePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>HomeUtente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p>Benvenuto nella Home Utente</p>\n\n  <button ion-button full color="light" (click)="visCatalogo()">Sfoglia Catalogo</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\home-utente\home-utente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomeUtentePage);
    return HomeUtentePage;
}());

//# sourceMappingURL=home-utente.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-ritiro/add-ritiro.module": [
		408,
		11
	],
	"../pages/add-utente/add-utente.module": [
		409,
		10
	],
	"../pages/admin-home/admin-home.module": [
		413,
		9
	],
	"../pages/catalogo/catalogo.module": [
		410,
		8
	],
	"../pages/conferma-ordine/conferma-ordine.module": [
		412,
		7
	],
	"../pages/home-azienda/home-azienda.module": [
		414,
		6
	],
	"../pages/home-utente/home-utente.module": [
		411,
		5
	],
	"../pages/home-work/home-work.module": [
		416,
		4
	],
	"../pages/login/login.module": [
		419,
		3
	],
	"../pages/ordina-prodotti/ordina-prodotti.module": [
		418,
		2
	],
	"../pages/prodotti-idonei/prodotti-idonei.module": [
		417,
		1
	],
	"../pages/prodotti/prodotti.module": [
		415,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(260);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_work_home_work__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_prodotti_prodotti__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_azienda_home_azienda__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_home_admin_home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_prodotti_idonei_prodotti_idonei__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_add_ritiro_add_ritiro__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_utente_home_utente__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_catalogo_catalogo__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ordina_prodotti_ordina_prodotti__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_conferma_ordine_conferma_ordine__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_add_utente_add_utente__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_work_home_work__["a" /* HomeWorkPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_prodotti_prodotti__["a" /* ProdottiPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_azienda_home_azienda__["a" /* HomeAziendaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_home_admin_home__["a" /* AdminHomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_utente_add_utente__["a" /* AddUtentePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_prodotti_idonei_prodotti_idonei__["a" /* ProdottiIdoneiPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_add_ritiro_add_ritiro__["a" /* AddRitiroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_utente_home_utente__["a" /* HomeUtentePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_catalogo_catalogo__["a" /* CatalogoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ordina_prodotti_ordina_prodotti__["a" /* OrdinaProdottiPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_conferma_ordine_conferma_ordine__["a" /* ConfermaOrdinePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-ritiro/add-ritiro.module#AddRitiroPageModule', name: 'AddRitiroPage', segment: 'add-ritiro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-utente/add-utente.module#AddUtentePageModule', name: 'AddUtentePage', segment: 'add-utente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/catalogo/catalogo.module#CatalogoPageModule', name: 'CatalogoPage', segment: 'catalogo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-utente/home-utente.module#HomeUtentePageModule', name: 'HomeUtentePage', segment: 'home-utente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conferma-ordine/conferma-ordine.module#ConfermaOrdinePageModule', name: 'ConfermaOrdinePage', segment: 'conferma-ordine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-home/admin-home.module#AdminHomePageModule', name: 'AdminHomePage', segment: 'admin-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-azienda/home-azienda.module#HomeAziendaPageModule', name: 'HomeAziendaPage', segment: 'home-azienda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prodotti/prodotti.module#ProdottiPageModule', name: 'ProdottiPage', segment: 'prodotti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-work/home-work.module#HomeWorkPageModule', name: 'HomeWorkPage', segment: 'home-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prodotti-idonei/prodotti-idonei.module#ProdottiIdoneiPageModule', name: 'ProdottiIdoneiPage', segment: 'prodotti-idonei', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ordina-prodotti/ordina-prodotti.module#OrdinaProdottiPageModule', name: 'OrdinaProdottiPage', segment: 'ordina-prodotti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_work_home_work__["a" /* HomeWorkPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_prodotti_prodotti__["a" /* ProdottiPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_azienda_home_azienda__["a" /* HomeAziendaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_home_admin_home__["a" /* AdminHomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_utente_add_utente__["a" /* AddUtentePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_prodotti_idonei_prodotti_idonei__["a" /* ProdottiIdoneiPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_add_ritiro_add_ritiro__["a" /* AddRitiroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_utente_home_utente__["a" /* HomeUtentePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_catalogo_catalogo__["a" /* CatalogoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ordina_prodotti_ordina_prodotti__["a" /* OrdinaProdottiPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_conferma_ordine_conferma_ordine__["a" /* ConfermaOrdinePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_work_home_work__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_azienda_home_azienda__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_home_admin_home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_utente_home_utente__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { NgModel } from '@angular/forms';
var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtrl, navCtrl, navParams, http) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.username = {};
        this.password = {};
        this.data = {};
        this.utenti = [];
        this.login = false;
        this.visualizzaUtenti = [];
    }
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: "Authenticating..."
        });
        this.loading.present();
    };
    LoginPage.prototype.logForm = function () {
        this.data.user = this.username;
        this.data.password = this.password;
        var dataStringed = JSON.stringify(this.data);
        this.http.post('http://192.168.1.136:8080/getLoginFormData', dataStringed)
            .subscribe(function (data) {
        }, function (error) {
            console.log('Oooops!');
        });
    };
    LoginPage.prototype.goToHome = function () {
        var _this = this;
        this.login = false;
        this.http.get('http://192.168.1.136:8080/getUtenti').pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (utentiList) {
            for (var x in utentiList.Utenti) {
                _this.visualizzaUtenti[x] = utentiList.Utenti[x];
                if (_this.username == utentiList.Utenti[x].Username) {
                    console.log('userok');
                    if (_this.password == utentiList.Utenti[x].Password) {
                        console.log('user e pass controllate login ok');
                        _this.login = true;
                        console.log('login vale', _this.login);
                        if (_this.login = true) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_utente_home_utente__["a" /* HomeUtentePage */]);
                            _this.login = false;
                        }
                    }
                }
                console.log('login vale: ', _this.login);
            }
        });
        var impiegato_user = {
            user: "impiegato",
            password: "impiegato"
        };
        var azienda_user = {
            user: "azienda",
            password: "azienda"
        };
        var admin_user = {
            user: "admin",
            password: "admin"
        };
        var utente_user = {
            user: "utente",
            password: "utente"
        };
        var user = this.username;
        var psw = this.password;
        switch (user && psw) {
            case impiegato_user.user && impiegato_user.password:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_work_home_work__["a" /* HomeWorkPage */]);
                break;
            case azienda_user.user && azienda_user.password:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_azienda_home_azienda__["a" /* HomeAziendaPage */]);
                break;
            case admin_user.user && admin_user.password:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__admin_home_admin_home__["a" /* AdminHomePage */]);
                break;
            case utente_user.user && utente_user.password:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_utente_home_utente__["a" /* HomeUtentePage */]);
                break;
            default:
                /*this.navCtrl.push(LoginPage); */
                break;
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\login\login.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n    <!-- <ion-content padding>\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Username</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="password"></ion-input>\n\n        </ion-item>\n\n\n\n        <button ion-button full (click)="goToHome()">LOGIN</button>\n\n\n\n        <button ion-button full color="light" (click)="goToReg()">REGISTRAZIONE</button>\n\n      \n\n      </ion-list> \n\n    </ion-content> -->\n\n\n\n    <ion-content padding>\n\n        <!--<form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">-->\n\n          <form #loginForm="ngForm" autocomplete="off" method="post" (ngSubmit)="logForm()" >\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-list inset>\n\n                <ion-item>\n\n                  <ion-input placeholder="Username" name="username" id="loginField" type="text" required [(ngModel)]="username" autocomplete="off" ></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-input placeholder="Password" name="password" id="passwordField" type="password" required [(ngModel)]="password"></ion-input>\n\n                </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n\n              <!-- <button ion-button full class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid" (click)="goToHome()">Login</button> -->\n\n              <button ion-button full (click)="goToHome()" [disabled]="!loginForm.form.valid" class="submit-btn" full type="submit">LOGIN</button>\n\n              <button ion-button full color="light" (click)="goToReg()">REGISTRAZIONE</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-content>\n\n    \n\n   \n\n      \n\n      \n\n\n\n\n\n'/*ion-inline-end:"C:\Users\raffa\visualWorkspace\APP-FSGlogin vecchio\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[252]);
//# sourceMappingURL=main.js.map