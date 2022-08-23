import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DrinkMenuPage } from './drink-menu.page';
import { DrinkGraphicComponent } from './drink-graphic/drink-graphic.component';
import { DrinkFormComponent } from './drink-form/drink-form.component';
var routes = [
    {
        path: '',
        component: DrinkMenuPage
    }
];
var DrinkMenuPageModule = /** @class */ (function () {
    function DrinkMenuPageModule() {
    }
    DrinkMenuPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            entryComponents: [DrinkFormComponent],
            declarations: [DrinkMenuPage, DrinkGraphicComponent, DrinkFormComponent],
        })
    ], DrinkMenuPageModule);
    return DrinkMenuPageModule;
}());
export { DrinkMenuPageModule };
//# sourceMappingURL=drink-menu.module.js.map