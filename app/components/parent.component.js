"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ParentComponent = /** @class */ (function () {
    function ParentComponent(router) {
        this.router = router;
    }
    ParentComponent.prototype.navigateToFirstChild = function () {
        this.router.navigate(["/parent/first"]);
    };
    ParentComponent.prototype.navigateToSecondChild = function () {
        this.router.navigate(["/parent/second"]);
    };
    ParentComponent = __decorate([
        core_1.Component({
            selector: "parent",
            template: "\n    <StackLayout width=\"150\" height=\"300\" backgroundColor=\"#FF00FF\">\n        <Label text=\"Parent Component\" class=\"h3\"></Label>\n        <unreload-container></unreload-container>\n        <Button text=\"To First\" (tap)=\"navigateToFirstChild()\" class=\"btn btn-primary\"></Button>\n        <Button text=\"To Second\" (tap)=\"navigateToSecondChild()\" class=\"btn btn-primary\"></Button>\n        <router-outlet></router-outlet>\n    </StackLayout>\n  "
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBY3pDO0lBQ0kseUJBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0Qyw4Q0FBb0IsR0FBM0I7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLCtDQUFxQixHQUE1QjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFUUSxlQUFlO1FBWjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsb2RBUVQ7U0FDRixDQUFDO3lDQUVxQyxlQUFNO09BRGhDLGVBQWUsQ0FVM0I7SUFBRCxzQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBhcmVudFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjMwMFwiIGJhY2tncm91bmRDb2xvcj1cIiNGRjAwRkZcIj5cbiAgICAgICAgPExhYmVsIHRleHQ9XCJQYXJlbnQgQ29tcG9uZW50XCIgY2xhc3M9XCJoM1wiPjwvTGFiZWw+XG4gICAgICAgIDx1bnJlbG9hZC1jb250YWluZXI+PC91bnJlbG9hZC1jb250YWluZXI+XG4gICAgICAgIDxCdXR0b24gdGV4dD1cIlRvIEZpcnN0XCIgKHRhcCk9XCJuYXZpZ2F0ZVRvRmlyc3RDaGlsZCgpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj48L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG8gU2Vjb25kXCIgKHRhcCk9XCJuYXZpZ2F0ZVRvU2Vjb25kQ2hpbGQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PC9CdXR0b24+XG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudENvbXBvbmVudCB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVUb0ZpcnN0Q2hpbGQoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wYXJlbnQvZmlyc3RcIl0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZVRvU2Vjb25kQ2hpbGQoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wYXJlbnQvc2Vjb25kXCJdKTtcbiAgICB9XG59XG4iXX0=