import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
var JWTS_LOCAL_KEY = 'JWTS_LOCAL_KEY';
var JWTS_ACTIVE_INDEX_KEY = 'JWTS_ACTIVE_INDEX_KEY';
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.url = environment.auth0.url;
        this.audience = environment.auth0.audience;
        this.clientId = environment.auth0.clientId;
        this.callbackURL = environment.auth0.callbackURL;
    }
    AuthService.prototype.build_login_link = function (callbackPath) {
        if (callbackPath === void 0) { callbackPath = ''; }
        var link = 'https://';
        link += this.url + '.auth0.com';
        link += '/authorize?';
        link += 'audience=' + this.audience + '&';
        link += 'response_type=token&';
        link += 'client_id=' + this.clientId + '&';
        link += 'redirect_uri=' + this.callbackURL + callbackPath;
        console.log(link);
        return link;
    };
    // invoked in app.component on load
    AuthService.prototype.check_token_fragment = function () {
        // parse the fragment
        var fragment = window.location.hash.substr(1).split('&')[0].split('=');
        // check if the fragment includes the access token
        if (fragment[0] === 'access_token') {
            // add the access token to the jwt
            this.token = fragment[1];
            // save jwts to localstore
            this.set_jwt();
        }
    };
    AuthService.prototype.set_jwt = function () {
        localStorage.setItem(JWTS_LOCAL_KEY, this.token);
        if (this.token) {
            this.decodeJWT(this.token);
        }
    };
    AuthService.prototype.load_jwts = function () {
        this.token = localStorage.getItem(JWTS_LOCAL_KEY) || null;
        if (this.token) {
            this.decodeJWT(this.token);
        }
    };
    AuthService.prototype.activeJWT = function () {
        return this.token;
    };
    AuthService.prototype.decodeJWT = function (token) {
        var jwtservice = new JwtHelperService();
        this.payload = jwtservice.decodeToken(token);
        return this.payload;
    };
    AuthService.prototype.logout = function () {
        this.token = '';
        this.payload = null;
        this.set_jwt();
    };
    AuthService.prototype.can = function (permission) {
        return this.payload && this.payload.permissions && this.payload.permissions.length && this.payload.permissions.indexOf(permission) >= 0;
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map