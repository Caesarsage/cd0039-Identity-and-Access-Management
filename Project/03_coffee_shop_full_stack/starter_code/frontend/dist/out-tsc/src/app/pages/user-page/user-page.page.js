import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
var UserPagePage = /** @class */ (function () {
    function UserPagePage(auth) {
        this.auth = auth;
        this.loginURL = auth.build_login_link('/tabs/user-page');
    }
    UserPagePage.prototype.ngOnInit = function () {
    };
    UserPagePage = __decorate([
        Component({
            selector: 'app-user-page',
            templateUrl: './user-page.page.html',
            styleUrls: ['./user-page.page.scss'],
        }),
        __metadata("design:paramtypes", [AuthService])
    ], UserPagePage);
    return UserPagePage;
}());
export { UserPagePage };
//# sourceMappingURL=user-page.page.js.map