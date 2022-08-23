import { __awaiter, __decorate, __generator, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DrinksService } from '../../services/drinks.service';
import { ModalController } from '@ionic/angular';
import { DrinkFormComponent } from './drink-form/drink-form.component';
import { AuthService } from 'src/app/services/auth.service';
var DrinkMenuPage = /** @class */ (function () {
    function DrinkMenuPage(auth, modalCtrl, drinks) {
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.drinks = drinks;
        this.Object = Object;
    }
    DrinkMenuPage.prototype.ngOnInit = function () {
        this.drinks.getDrinks();
    };
    DrinkMenuPage.prototype.openForm = function (activedrink) {
        if (activedrink === void 0) { activedrink = null; }
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.auth.can('get:drinks-detail')) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: DrinkFormComponent,
                                componentProps: { drink: activedrink, isNew: !activedrink }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    var _a;
    DrinkMenuPage = __decorate([
        Component({
            selector: 'app-drink-menu',
            templateUrl: './drink-menu.page.html',
            styleUrls: ['./drink-menu.page.scss'],
        }),
        __metadata("design:paramtypes", [AuthService, typeof (_a = typeof ModalController !== "undefined" && ModalController) === "function" ? _a : Object, DrinksService])
    ], DrinkMenuPage);
    return DrinkMenuPage;
}());
export { DrinkMenuPage };
//# sourceMappingURL=drink-menu.page.js.map