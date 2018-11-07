(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n \n \n    <div class=\"jumbotron\" >\n        <h1 class=\"display-4\">Hello, world!</h1>\n        <p class=\"lead\">This is a chat demo made with Socket.IO and NodeJS</p>\n        <hr class=\"my-4\">\n        <div >\n            <p>User Name: <input type=\"text\" [(ngModel)]=\"name\" />  \n            </p>\n          <p class=\"lead\">\n              <input (click)=\"Connect()\" class=\"btn btn-primary\" value=\"Connect\" type=\"button\" title=\"Connect\" />\n          </p>\n        </div>\n        \n      </div>\n  \n \n<div *ngIf=\"connected\">\n  <div class=\"row \">\n    <div  class=\"col-md-4 mb-3\" *ngFor=\"let user of chatBus.connectedUsers\" >\n      <online-users [userName]=\"user\">\n        </online-users>\n      </div>\n  </div>\n    \n</div>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-bus.service */ "./src/app/chat-bus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(chatBus) {
        this.chatBus = chatBus;
        this.title = 'app';
        this.name = "";
        this.msg = "";
        this.msgs = [];
        this.connected = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.Connect = function () {
        var _this = this;
        this.chatBus.connect(this.name);
        this.connected = true;
        this.chatBus.getMessage().subscribe(function (msg) { return _this.msgs.push(msg); });
        this.chatBus.onNewUser().subscribe();
        this.chatBus.onUserDisconnect().subscribe();
    };
    AppComponent.prototype.sendMessage = function () {
        this.chatBus.sendMessage(this.name + " : " + this.msg);
        this.msg = "";
    };
    AppComponent.prototype.getMessage = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_bus_service__WEBPACK_IMPORTED_MODULE_1__["ChatBusService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _online_users_online_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./online-users/online-users.component */ "./src/app/online-users/online-users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _online_users_online_users_component__WEBPACK_IMPORTED_MODULE_4__["OnlineUsersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-bus.service.ts":
/*!*************************************!*\
  !*** ./src/app/chat-bus.service.ts ***!
  \*************************************/
/*! exports provided: ChatBusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBusService", function() { return ChatBusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatBusService = /** @class */ (function () {
    function ChatBusService() {
        this.name = "";
        this.connectedUsers = [];
    }
    ChatBusService.prototype.connect = function (name) {
        console.log(this.connectedUsers);
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__("wss://rrnodechatserver.herokuapp.com/", {
            withCredentials: false
        });
        this.socket.emit("new-connection", name);
    };
    //   this.socket = socketIo("http://localhost:3000",{
    //       withCredentials:false
    //     });
    //     this.socket.emit("new-connection",name);
    //  }
    ChatBusService.prototype.sendMessage = function (msg) {
        this.socket.emit("new-message", msg);
    };
    ChatBusService.prototype.getMessage = function () {
        var _this = this;
        this.socket.withCredentials = false;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on("new-message", function (data) {
                observer.next(data);
            });
        });
    };
    ChatBusService.prototype.onNewUser = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on("new-connection-success", function (data) {
                // observer.next(data)
                console.log(data);
                _this.connectedUsers = data;
            });
        });
    };
    ChatBusService.prototype.onUserDisconnect = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on("user-disconnected", function (data) {
                _this.connectedUsers = data;
            });
        });
    };
    ChatBusService.prototype.onEvent = function (event) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    ChatBusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ChatBusService);
    return ChatBusService;
}());



/***/ }),

/***/ "./src/app/online-users/online-users.component.css":
/*!*********************************************************!*\
  !*** ./src/app/online-users/online-users.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/online-users/online-users.component.html":
/*!**********************************************************!*\
  !*** ./src/app/online-users/online-users.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded border border-info\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{userName}}</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Developer</h6>\n      <p class=\"card-text\">Programming is the best</p>\n      <a href=\"#\" class=\"card-link\"><input type=\"button\" class=\"btn btn-primary\" value=\"Chat\"></a>\n      <a href=\"#\" class=\"card-link\"><input type=\"button\" class=\"btn btn-warning\" value=\"Details\"></a>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/online-users/online-users.component.ts":
/*!********************************************************!*\
  !*** ./src/app/online-users/online-users.component.ts ***!
  \********************************************************/
/*! exports provided: OnlineUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineUsersComponent", function() { return OnlineUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlineUsersComponent = /** @class */ (function () {
    function OnlineUsersComponent() {
    }
    OnlineUsersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OnlineUsersComponent.prototype, "userName", void 0);
    OnlineUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'online-users',
            template: __webpack_require__(/*! ./online-users.component.html */ "./src/app/online-users/online-users.component.html"),
            styles: [__webpack_require__(/*! ./online-users.component.css */ "./src/app/online-users/online-users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OnlineUsersComponent);
    return OnlineUsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Rohit\RnD\ChatDemo\ChatwebClient\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map