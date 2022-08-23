import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(auth, platform, splashScreen, statusBar) {
        this.auth = auth;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // Perform required auth actions
            _this.auth.load_jwts();
            _this.auth.check_token_fragment();
        });
    };
    var _a, _b, _c;
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [AuthService, typeof (_a = typeof Platform !== "undefined" && Platform) === "function" ? _a : Object, typeof (_b = typeof SplashScreen !== "undefined" && SplashScreen) === "function" ? _b : Object, typeof (_c = typeof StatusBar !== "undefined" && StatusBar) === "function" ? _c : Object])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map