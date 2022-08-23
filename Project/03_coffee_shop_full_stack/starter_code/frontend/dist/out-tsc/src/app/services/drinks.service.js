import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
var DrinksService = /** @class */ (function () {
    // = {
    //                             1: {
    //                             id: 1,
    //                             title: 'matcha shake',
    //                             recipe: [
    //                                   {
    //                                     name: 'milk',
    //                                     color: 'grey',
    //                                     parts: 1
    //                                   },
    //                                   {
    //                                     name: 'matcha',
    //                                     color: 'green',
    //                                     parts: 3
    //                                   },
    //                                 ]
    //                           },
    //                           2: {
    //                             id: 2,
    //                             title: 'flatwhite',
    //                             recipe: [
    //                                   {
    //                                     name: 'milk',
    //                                     color: 'grey',
    //                                     parts: 3
    //                                   },
    //                                   {
    //                                     name: 'coffee',
    //                                     color: 'brown',
    //                                     parts: 1
    //                                   },
    //                                 ]
    //                           },
    //                           3: {
    //                             id: 3,
    //                             title: 'cap',
    //                             recipe: [
    //                                   {
    //                                     name: 'foam',
    //                                     color: 'white',
    //                                     parts: 1
    //                                   },
    //                                   {
    //                                     name: 'milk',
    //                                     color: 'grey',
    //                                     parts: 2
    //                                   },
    //                                   {
    //                                     name: 'coffee',
    //                                     color: 'brown',
    //                                     parts: 1
    //                                   },
    //                                 ]
    //                           }
    //   };
    function DrinksService(auth, http) {
        this.auth = auth;
        this.http = http;
        this.url = environment.apiServerUrl;
        this.items = {};
    }
    DrinksService.prototype.getHeaders = function () {
        var header = {
            headers: new HttpHeaders()
                .set('Authorization', "Bearer ".concat(this.auth.activeJWT()))
        };
        return header;
    };
    DrinksService.prototype.getDrinks = function () {
        var _this = this;
        if (this.auth.can('get:drinks-detail')) {
            this.http.get(this.url + '/drinks-detail', this.getHeaders())
                .subscribe(function (res) {
                _this.drinksToItems(res.drinks);
                console.log(res);
            });
        }
        else {
            this.http.get(this.url + '/drinks', this.getHeaders())
                .subscribe(function (res) {
                _this.drinksToItems(res.drinks);
                console.log(res);
            });
        }
    };
    DrinksService.prototype.saveDrink = function (drink) {
        var _this = this;
        if (drink.id >= 0) { // patch
            this.http.patch(this.url + '/drinks/' + drink.id, drink, this.getHeaders())
                .subscribe(function (res) {
                if (res.success) {
                    _this.drinksToItems(res.drinks);
                }
            });
        }
        else { // insert
            this.http.post(this.url + '/drinks', drink, this.getHeaders())
                .subscribe(function (res) {
                if (res.success) {
                    _this.drinksToItems(res.drinks);
                }
            });
        }
    };
    DrinksService.prototype.deleteDrink = function (drink) {
        delete this.items[drink.id];
        this.http.delete(this.url + '/drinks/' + drink.id, this.getHeaders())
            .subscribe(function (res) {
        });
    };
    DrinksService.prototype.drinksToItems = function (drinks) {
        for (var _i = 0, drinks_1 = drinks; _i < drinks_1.length; _i++) {
            var drink = drinks_1[_i];
            this.items[drink.id] = drink;
        }
    };
    var _a;
    DrinksService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AuthService, typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object])
    ], DrinksService);
    return DrinksService;
}());
export { DrinksService };
//# sourceMappingURL=drinks.service.js.map