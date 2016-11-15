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
var PhotoDetailsComponent = (function () {
    function PhotoDetailsComponent(_route) {
        this._route = _route;
    }
    PhotoDetailsComponent.prototype.ngOnInit = function () {
        // this.sub = this._route.params.subscribe(params => {
        //     this.id = +params["id"];
        // })
        this.id = this._route.snapshot.params["id"];
    };
    PhotoDetailsComponent.prototype.ngOnDestroy = function () {
        //this.sub.unsubscribe();
    };
    PhotoDetailsComponent = __decorate([
        core_1.Component({
            template: "<h1>Photo Details {{ id }}</h1>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], PhotoDetailsComponent);
    return PhotoDetailsComponent;
}());
exports.PhotoDetailsComponent = PhotoDetailsComponent;
//# sourceMappingURL=photo-details.component.js.map