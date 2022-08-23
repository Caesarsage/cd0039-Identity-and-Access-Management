import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { DrinksService } from 'src/app/services/drinks.service';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var DrinkFormComponent = /** @class */ (function () {
    function DrinkFormComponent(auth, modalCtrl, drinkService) {
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.drinkService = drinkService;
    }
    DrinkFormComponent.prototype.ngOnInit = function () {
        if (this.isNew) {
            this.drink = {
                id: -1,
                title: '',
                recipe: []
            };
            this.addIngredient();
        }
    };
    DrinkFormComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    DrinkFormComponent.prototype.addIngredient = function (i) {
        if (i === void 0) { i = 0; }
        this.drink.recipe.splice(i + 1, 0, { name: '', color: 'white', parts: 1 });
    };
    DrinkFormComponent.prototype.removeIngredient = function (i) {
        this.drink.recipe.splice(i, 1);
    };
    DrinkFormComponent.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    DrinkFormComponent.prototype.saveClicked = function () {
        this.drinkService.saveDrink(this.drink);
        this.closeModal();
    };
    DrinkFormComponent.prototype.deleteClicked = function () {
        this.drinkService.deleteDrink(this.drink);
        this.closeModal();
    };
    var _a;
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DrinkFormComponent.prototype, "drink", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DrinkFormComponent.prototype, "isNew", void 0);
    DrinkFormComponent = __decorate([
        Component({
            selector: 'app-drink-form',
            templateUrl: './drink-form.component.html',
            styleUrls: ['./drink-form.component.scss'],
        }),
        __metadata("design:paramtypes", [AuthService, typeof (_a = typeof ModalController !== "undefined" && ModalController) === "function" ? _a : Object, DrinksService])
    ], DrinkFormComponent);
    return DrinkFormComponent;
}());
export { DrinkFormComponent };
//# sourceMappingURL=drink-form.component.js.map