"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
    }
    AppComponent.prototype.onClick = function () {
        this._router.navigate(['photos', 2]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <ul>\n    \t<li><a routerLink=\"\">Home</a></li>\n    \t<li><a routerLink=\"messages\">Messages</a></li>\n    \t<li><a routerLink=\"photos\">Photos</a></li>\n    \t<li><a [routerLink]=\"['photos', 1]\">Photo with id</a></li>\n\t</ul>\n\t\n\t<button (click)=\"onClick()\" >Click me</button>\n\t\n\t<router-outlet></router-outlet>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map