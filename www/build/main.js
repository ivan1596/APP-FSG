webpackJsonp([4],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAziendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prodotti_prodotti__ = __webpack_require__(124);
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
    HomeAziendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeAziendaPage');
    };
    HomeAziendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-azienda',template:/*ion-inline-start:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\pages\home-azienda\home-azienda.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Home Azienda\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <h1>\n        Benvenuto nella home di gestione aziendale \n    </h1>\n\n    <button ion-button full (click)="goToProdotti()">Visualizza i prodotti</button>\n    <button ion-button full  (click)="goToPuntiRitiro()">Inserisci punti di ritiro</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\pages\home-azienda\home-azienda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomeAziendaPage);
    return HomeAziendaPage;
}());

//# sourceMappingURL=home-azienda.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdottiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(274);
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
        this.CodProdottiIdonei = [];
    }
    ProdottiPage.prototype.inviaProd = function () {
        console.log("Hai inviato i prodotti selezionati come idonei al server");
    };
    ProdottiPage.prototype.InserisciProdottiIdonei = function (CodIdo) {
        console.log("Hai inserito ", CodIdo, "indicandolo come prodotto idoneo");
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
            selector: 'page-prodotti',template:/*ion-inline-start:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\pages\prodotti\prodotti.html"*/'<!--\n\n  Generated template for the ProdottiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n <!--codice per uscire le proprietà dei prodotti dal db <li *ngFor="let visualizzaProdottiCompleti of visualizzaProdotti">\n\n              {{ visualizzaProdottiCompleti.datascadenza}}\n\n            </li>-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Prodotti</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n      <!--<ion-list id="product-List">\n\n        <ion-item  *ngFor="let visualizzaProdottiCompleti of visualizzaProdotti">\n\n              <ion-label>{{visualizzaProdottiCompleti.nome}}</ion-label><br> \n\n              <ion-radio value="Idoneo"></ion-radio><br>\n\n              <ion-label> <b>Data Scadenza: </b>{{ visualizzaProdottiCompleti.datascadenza}}</ion-label>\n\n              <ion-label> <b>Codice Prodotto: </b>{{ visualizzaProdottiCompleti.codice}}</ion-label> \n\n        </ion-item>\n\n      </ion-list> -->\n\n      <ion-list >\n\n       <ion-item *ngFor="let visualizzaProdottiCompleti of visualizzaProdotti">\n\n         <ion-card>\n\n            \n\n           <ion-card-header>\n\n            <b>{{visualizzaProdottiCompleti.nome}}</b>\n\n           </ion-card-header>\n\n           <ion-card-content>\n\n              <b>DataScadenza: </b><p>{{ visualizzaProdottiCompleti.datascadenza}}</p>\n\n              <b>CodiceProdotto: </b> <p>{{ visualizzaProdottiCompleti.codice}}</p> \n\n              <b>Idoneo: </b> <p>{{ visualizzaProdottiCompleti.idoneo}}</p> \n\n              <ion-item>\n\n                  <ion-radio  value="Idoneo" (click)="InserisciProdottiIdonei(visualizzaProdottiCompleti.codice)"></ion-radio>\n\n               </ion-item>\n\n           </ion-card-content>\n\n        \n\n         </ion-card>\n\n       \n\n       </ion-item>\n\n      </ion-list>\n\n     <!--<button ion-button full color="light" (click)="visProd()">Prodotti</button>-->\n\n     <button ion-button full color="light" (click)="inviaProd()">InviaProdottiIdonei</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\pages\prodotti\prodotti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], ProdottiPage);
    return ProdottiPage;
}());

//# sourceMappingURL=prodotti.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(200);
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
    function HomeWorkPage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
    }
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
            selector: 'page-home-work',template:/*ion-inline-start:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\pages\home-work\home-work.html"*/'<!--\n  Generated template for the HomeWorkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>HomeWork</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n     <!-- <form (ngSubmit)="productForm()">-->\n        <ion-item>\n          <ion-label floating>Nome Prodotto</ion-label>\n          <ion-input type="text" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Codice</ion-label>\n          <ion-input type="text" value="{{codice}}"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label floating>Data Scadenza</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-item>\n       \n       \n      <!--</form>-->\n        <button ion-button full (click)="aggiungi()">AGGIUNGI PRODOTTO</button>\n        <button ion-button full (click)="scansiona()">SCANSIONA PRODOTTO</button>\n      \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\pages\home-work\home-work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], HomeWorkPage);
    return HomeWorkPage;
}());

//# sourceMappingURL=home-work.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_work_home_work__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_azienda_home_azienda__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_home_admin_home__ = __webpack_require__(405);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\pages\login\login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n    <!-- <ion-content padding>\n      <ion-list>\n\n        <ion-item>\n          <ion-label stacked>Username</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label stacked>Password</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n\n        <button ion-button full (click)="goToHome()">LOGIN</button>\n\n        <button ion-button full color="light" (click)="goToReg()">REGISTRAZIONE</button>\n      \n      </ion-list> \n    </ion-content> -->\n\n    <ion-content padding>\n        <!--<form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">-->\n          <form #loginForm="ngForm" autocomplete="off" method="post" (ngSubmit)="logForm()" >\n          <ion-row>\n            <ion-col>\n              <ion-list inset>\n                <ion-item>\n                  <ion-input placeholder="Username" name="username" id="loginField" type="text" required [(ngModel)]="username" autocomplete="off" ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-input placeholder="Password" name="password" id="passwordField" type="password" required [(ngModel)]="password"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n              <!-- <button ion-button full class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid" (click)="goToHome()">Login</button> -->\n              <button ion-button full (click)="goToHome()" [disabled]="!loginForm.form.valid" class="submit-btn" full type="submit">LOGIN</button>\n              <button ion-button full color="light" (click)="goToReg()">REGISTRAZIONE</button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-content>\n    \n   \n      \n      \n\n\n'/*ion-inline-end:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 137:
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
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-home/admin-home.module": [
		404,
		6
	],
	"../pages/home-azienda/home-azienda.module": [
		400,
		10
	],
	"../pages/home-work/home-work.module": [
		401,
		9
	],
	"../pages/login/login.module": [
		402,
		8
	],
	"../pages/prodotti/prodotti.module": [
		403,
		7
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
webpackAsyncContext.id = 180;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_work_home_work__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_prodotti_prodotti__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_azienda_home_azienda__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_home_admin_home__ = __webpack_require__(405);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_home_admin_home__["a" /* AdminHomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-azienda/home-azienda.module#HomeAziendaPageModule', name: 'HomeAziendaPage', segment: 'home-azienda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-work/home-work.module#HomeWorkPageModule', name: 'HomeWorkPage', segment: 'home-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prodotti/prodotti.module#ProdottiPageModule', name: 'ProdottiPage', segment: 'prodotti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-home/admin-home.module#AdminHomePageModule', name: 'AdminHomePage', segment: 'admin-home', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_home_admin_home__["a" /* AdminHomePage */]
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

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(126);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
    AdminHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminHomePage');
    };
    AdminHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-home',template:/*ion-inline-start:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\pages\admin-home\admin-home.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>AdminHome</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>\n    Benvenuto nell\'interfaccia gestionale dell\'amministratore del portale\n  </h2>\n\n  <button ion-button full (click)="goToProdottiPortale()">Visualizza i prodotti del Portale</button>\n  <button ion-button full  (click)="goToPuntiRitiroPortale()">Inserisci punti di ritiro nel Portale</button>\n  <button ion-button full  (click)="goToVerificaUtenti()">Verifica Utenti</button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan\Desktop\Projects\APP-FSG\src\pages\admin-home\admin-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AdminHomePage);
    return AdminHomePage;
}());

//# sourceMappingURL=admin-home.js.map

/***/ })

},[243]);
//# sourceMappingURL=main.js.map