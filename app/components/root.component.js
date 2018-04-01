"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var RootComponent = /** @class */ (function () {
    function RootComponent(router) {
        this.router = router;
    }
    RootComponent.prototype.navigateToView = function () {
        this.router.navigate(["parent"]);
    };
    RootComponent = __decorate([
        core_1.Component({
            selector: "root",
            template: "<Button text=\"To View\" (tap)=\"navigateToView()\" class=\"btn btn-primary\"></Button>"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb290LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFNekM7SUFDSSx1QkFBMkIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRDLHNDQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFMUSxhQUFhO1FBSnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUseUZBQW1GO1NBQzlGLENBQUM7eUNBRXFDLGVBQU07T0FEaEMsYUFBYSxDQU16QjtJQUFELG9CQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicm9vdFwiLFxuICB0ZW1wbGF0ZTogYDxCdXR0b24gdGV4dD1cIlRvIFZpZXdcIiAodGFwKT1cIm5hdmlnYXRlVG9WaWV3KClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPjwvQnV0dG9uPmBcbn0pXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudCB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVUb1ZpZXcoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBhcmVudFwiXSk7XG4gICAgfVxufVxuIl19