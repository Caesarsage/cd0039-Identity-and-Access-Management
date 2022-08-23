import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            { path: 'drink-menu', loadChildren: '../drink-menu/drink-menu.module#DrinkMenuPageModule' },
            { path: 'user-page', loadChildren: '../user-page/user-page.module#UserPagePageModule' },
            {
                path: '',
                redirectTo: '/tabs/drink-menu',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/drink-menu',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map