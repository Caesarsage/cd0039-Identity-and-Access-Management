import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserPagePage } from './user-page.page';
var routes = [
    {
        path: '',
        component: UserPagePage
    }
];
var UserPagePageModule = /** @class */ (function () {
    function UserPagePageModule() {
    }
    UserPagePageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UserPagePage]
        })
    ], UserPagePageModule);
    return UserPagePageModule;
}());
export { UserPagePageModule };
//# sourceMappingURL=user-page.module.js.map