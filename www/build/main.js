webpackJsonp([8],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRitiroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(59);
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
        this.http.post('http://localhost:8080/inserisciPuntiRitiro', datiPuntoRitiro)
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
            selector: 'page-add-ritiro',template:/*ion-inline-start:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\add-ritiro\add-ritiro.html"*/'<!--\n\n  Generated template for the AddRitiroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>AddRitiro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n<h1>Aggiungi un punto di ritiro</h1>\n\n<ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Città</ion-label>\n\n      <ion-input  #citta></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Via</ion-label>\n\n      <ion-input  #Via></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>CAP</ion-label>\n\n        <ion-input  #CAP></ion-input>\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n  <button ion-button full (click)="inserisciPuntiRitiro(citta.value,Via.value,CAP.value)" >Inserisci Punto Ritiro</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\add-ritiro\add-ritiro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object])
    ], AddRitiroPage);
    return AddRitiroPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=add-ritiro.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__punti_ritiro_punti_ritiro__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prodotti_idonei_prodotti_idonei__ = __webpack_require__(127);
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
    AdminHomePage.prototype.goToPuntiRitiroPortale = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__punti_ritiro_punti_ritiro__["a" /* PuntiRitiroPage */]);
    };
    AdminHomePage.prototype.goToProdottiPortale = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__prodotti_idonei_prodotti_idonei__["a" /* ProdottiIdoneiPage */]);
    };
    AdminHomePage.prototype.goToProdottiIdonei = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__prodotti_idonei_prodotti_idonei__["a" /* ProdottiIdoneiPage */]);
    };
    AdminHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminHomePage');
    };
    AdminHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-home',template:/*ion-inline-start:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\admin-home\admin-home.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>AdminHome</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2>\n\n    Benvenuto nell\'interfaccia gestionale dell\'amministratore del portale\n\n  </h2>\n\n\n\n  <button ion-button full (click)="goToProdottiPortale()">Visualizza i prodotti del Portale</button>\n\n  <button ion-button full  (click)="goToPuntiRitiroPortale()">Inserisci punti di ritiro nel Portale</button>\n\n  <button ion-button full  (click)="goToVerificaUtenti()">Verifica Utenti</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\admin-home\admin-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AdminHomePage);
    return AdminHomePage;
}());

//# sourceMappingURL=admin-home.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuntiRitiroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the PuntiRitiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PuntiRitiroPage = /** @class */ (function () {
    function PuntiRitiroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PuntiRitiroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PuntiRitiroPage');
    };
    PuntiRitiroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-punti-ritiro',template:/*ion-inline-start:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\punti-ritiro\punti-ritiro.html"*/'<!--\n\n  Generated template for the PuntiRitiroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>PuntiRitiro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\punti-ritiro\punti-ritiro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PuntiRitiroPage);
    return PuntiRitiroPage;
}());

//# sourceMappingURL=punti-ritiro.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdottiIdoneiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(186);
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
    ProdottiIdoneiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://localhost:8080/prodottiIdonei').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (productList) {
            for (var x in productList.Prodotti) {
                _this.visualizzaProdotti[x] = productList.Prodotti[x];
                console.log("Oggetto nell indice: ", x + " ", _this.visualizzaProdotti[x]);
            }
        });
    };
    ProdottiIdoneiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prodotti-idonei',template:/*ion-inline-start:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\prodotti-idonei\prodotti-idonei.html"*/'<!--\n\n  Generated template for the ProdottiIdoneiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ProdottiIdonei</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list >\n\n        <ion-item *ngFor="let visualizzaProdottiCompleti of visualizzaProdotti">\n\n          <ion-card>\n\n             \n\n            <ion-card-header>\n\n             <b>{{visualizzaProdottiCompleti.nome}}</b>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n               <b>DataScadenza: </b><p>{{ visualizzaProdottiCompleti.datascadenza}}</p>\n\n               <b>CodiceProdotto: </b> <p>{{ visualizzaProdottiCompleti.codice}}</p> \n\n               <b>Idoneo: </b> <p>{{ visualizzaProdottiCompleti.idoneo}}</p> \n\n               <ion-item>\n\n                   <ion-radio  value="Idoneo" (click)="InserisciProdottiIdonei(visualizzaProdottiCompleti.codice)"></ion-radio>\n\n                </ion-item>\n\n            </ion-card-content>\n\n         \n\n          </ion-card>\n\n        \n\n        </ion-item>\n\n       </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\prodotti-idonei\prodotti-idonei.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ProdottiIdoneiPage);
    return ProdottiIdoneiPage;
}());

//# sourceMappingURL=prodotti-idonei.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAziendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prodotti_prodotti__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_ritiro_add_ritiro__ = __webpack_require__(124);
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
            selector: 'page-home-azienda',template:/*ion-inline-start:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\home-azienda\home-azienda.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Home Azienda\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <h1>\n\n        Benvenuto nella home di gestione aziendale \n\n    </h1>\n\n\n\n    <button ion-button full (click)="goToProdotti()">Visualizza i prodotti</button>\n\n    <button ion-button full  (click)="goToPuntiRitiro()">Inserisci punti di ritiro</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\home-azienda\home-azienda.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], HomeAziendaPage);
    return HomeAziendaPage;
    var _a, _b;
}());

//# sourceMappingURL=home-azienda.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdottiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(186);
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
        console.log("Hai inserito il prodotto", +prodottoIdo, "indicandolo come idoneo");
        this.prodottiIdonei.push(prodottoIdo);
        this.CodProdottiIdonei.push(CodIdo);
        JSON.stringify(this.CodProdottiIdonei);
        this.http.post('http://localhost:8080/modIdoneo', this.CodProdottiIdonei).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (response) {
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
        this.http.get('http://localhost:8080/prodotti').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (productList) {
            for (var x in productList.Prodotti) {
                _this.visualizzaProdotti[x] = productList.Prodotti[x];
                console.log("Oggetto nell indice: ", x + " ", _this.visualizzaProdotti[x]);
            }
        });
    };
    ProdottiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prodotti',template:/*ion-inline-start:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\prodotti\prodotti.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Prodotti</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n      <ion-list >\n\n       <ion-item *ngFor="let visualizzaProdottiCompleti of visualizzaProdotti">\n\n         <ion-card>\n\n            \n\n           <ion-card-header>\n\n            <b>{{visualizzaProdottiCompleti.nome}}</b>\n\n           </ion-card-header>\n\n           <ion-card-content>\n\n              <b>DataScadenza: </b><p>{{ visualizzaProdottiCompleti.datascadenza}}</p>\n\n              <b>CodiceProdotto: </b> <p>{{ visualizzaProdottiCompleti.codice}}</p> \n\n              <b>Idoneo: </b> <p>{{ visualizzaProdottiCompleti.idoneo}}</p> \n\n              <ion-item>\n\n                  <ion-radio  value="Idoneo" (click)="InserisciProdottiIdonei(visualizzaProdottiCompleti.codice)"></ion-radio>\n\n               </ion-item>\n\n           </ion-card-content>\n\n        \n\n         </ion-card>\n\n       \n\n       </ion-item>\n\n      </ion-list>\n\n \n\n     <button ion-button full color="light" (click)="inviaProd()">Invia Prodotti Idonei</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\prodotti\prodotti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], ProdottiPage);
    return ProdottiPage;
}());

//# sourceMappingURL=prodotti.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
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
        this.http.post('http://localhost:8080/inserisciProdotti', datiProdotto)
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
            selector: 'page-home-work',template:/*ion-inline-start:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\home-work\home-work.html"*/'<!--\n\n  Generated template for the HomeWorkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>HomeWork</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n     <!-- <form (ngSubmit)="productForm()">-->\n\n        <ion-item>\n\n          <ion-label floating>Nome Prodotto</ion-label>\n\n          <!--<ion-input type="text" [(ngModel)]=“data.username”></ion-input>-->\n\n          <ion-input  #nomeProdotto></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>Codice</ion-label>\n\n         <!-- <ion-input type="text" value="{{codice}}" [(ngModel)]=“data.codice”></ion-input>-->\n\n         <ion-input  #codiceProdotto></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n            <ion-label floating>Data Scadenza</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" #myDate></ion-datetime>\n\n            \n\n        </ion-item>\n\n       \n\n       \n\n      <!--</form>-->\n\n        <button ion-button full (click)="inserisciProdotto(nomeProdotto.value,codiceProdotto.value,myDate.value)">AGGIUNGI PRODOTTO</button>\n\n        <button ion-button full (click)="scansiona()">SCANSIONA PRODOTTO</button>\n\n      \n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\home-work\home-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], HomeWorkPage);
    return HomeWorkPage;
}());

//# sourceMappingURL=home-work.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_work_home_work__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_azienda_home_azienda__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_home_admin_home__ = __webpack_require__(125);
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
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.username = {};
        this.password = {};
    }
    LoginPage.prototype.logForm = function () {
        console.log(this.username);
        console.log(this.password);
    };
    LoginPage.prototype.goToHome = function () {
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\login\login.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n    <!-- <ion-content padding>\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Username</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="password"></ion-input>\n\n        </ion-item>\n\n\n\n        <button ion-button full (click)="goToHome()">LOGIN</button>\n\n\n\n        <button ion-button full color="light" (click)="goToReg()">REGISTRAZIONE</button>\n\n      \n\n      </ion-list> \n\n    </ion-content> -->\n\n\n\n    <ion-content padding>\n\n        <!--<form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">-->\n\n          <form #loginForm="ngForm" autocomplete="off" method="post" (ngSubmit)="logForm()" >\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-list inset>\n\n                <ion-item>\n\n                  <ion-input placeholder="Username" name="username" id="loginField" type="text" required [(ngModel)]="username" autocomplete="off" ></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-input placeholder="Password" name="password" id="passwordField" type="password" required [(ngModel)]="password"></ion-input>\n\n                </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n\n              <!-- <button ion-button full class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid" (click)="goToHome()">Login</button> -->\n\n              <button ion-button full (click)="goToHome()" [disabled]="!loginForm.form.valid" class="submit-btn" full type="submit">LOGIN</button>\n\n              <button ion-button full color="light" (click)="goToReg()">REGISTRAZIONE</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-content>\n\n    \n\n   \n\n      \n\n      \n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 142:
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
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-ritiro/add-ritiro.module": [
		404,
		7
	],
	"../pages/admin-home/admin-home.module": [
		405,
		6
	],
	"../pages/home-azienda/home-azienda.module": [
		406,
		5
	],
	"../pages/home-work/home-work.module": [
		407,
		4
	],
	"../pages/login/login.module": [
		408,
		3
	],
	"../pages/prodotti-idonei/prodotti-idonei.module": [
		409,
		2
	],
	"../pages/prodotti/prodotti.module": [
		410,
		1
	],
	"../pages/punti-ritiro/punti-ritiro.module": [
		411,
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
webpackAsyncContext.id = 185;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_work_home_work__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_prodotti_prodotti__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_azienda_home_azienda__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_home_admin_home__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_punti_ritiro_punti_ritiro__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_prodotti_idonei_prodotti_idonei__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_ritiro_add_ritiro__ = __webpack_require__(124);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_punti_ritiro_punti_ritiro__["a" /* PuntiRitiroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_prodotti_idonei_prodotti_idonei__["a" /* ProdottiIdoneiPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_ritiro_add_ritiro__["a" /* AddRitiroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-ritiro/add-ritiro.module#AddRitiroPageModule', name: 'AddRitiroPage', segment: 'add-ritiro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-home/admin-home.module#AdminHomePageModule', name: 'AdminHomePage', segment: 'admin-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-azienda/home-azienda.module#HomeAziendaPageModule', name: 'HomeAziendaPage', segment: 'home-azienda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-work/home-work.module#HomeWorkPageModule', name: 'HomeWorkPage', segment: 'home-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prodotti-idonei/prodotti-idonei.module#ProdottiIdoneiPageModule', name: 'ProdottiIdoneiPage', segment: 'prodotti-idonei', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prodotti/prodotti.module#ProdottiPageModule', name: 'ProdottiPage', segment: 'prodotti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/punti-ritiro/punti-ritiro.module#PuntiRitiroPageModule', name: 'PuntiRitiroPage', segment: 'punti-ritiro', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_work_home_work__["a" /* HomeWorkPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_prodotti_prodotti__["a" /* ProdottiPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_azienda_home_azienda__["a" /* HomeAziendaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_home_admin_home__["a" /* AdminHomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_punti_ritiro_punti_ritiro__["a" /* PuntiRitiroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_prodotti_idonei_prodotti_idonei__["a" /* ProdottiIdoneiPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_ritiro_add_ritiro__["a" /* AddRitiroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(131);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Mio\Desktop\unicam\progetti\APP-FSG\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[248]);
//# sourceMappingURL=main.js.map