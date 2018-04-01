"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var parent_component_1 = require("./components/parent.component");
var firstchild_component_1 = require("./components/firstchild.component");
var secondchild_component_1 = require("./components/secondchild.component");
var unrealod_container_component_1 = require("./components/unrealod-container.component");
var root_component_1 = require("./components/root.component");
var routes = [
    { path: "", component: root_component_1.RootComponent },
    { path: "parent", component: parent_component_1.ParentComponent,
        children: [
            { path: "first", component: firstchild_component_1.FirstChildComponent },
            { path: "second", component: secondchild_component_1.SecondChildComponent },
            { path: "unreload-container", component: unrealod_container_component_1.UnreloadContainerComponent }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSxrRUFBZ0U7QUFDaEUsMEVBQXdFO0FBQ3hFLDRFQUEwRTtBQUMxRSwwRkFBdUY7QUFDdkYsOERBQTREO0FBRTVELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlO1FBQ3hDLFFBQVEsRUFBRTtZQUNOLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7WUFDakQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBRTtZQUNuRCxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUseURBQTBCLEVBQUU7U0FDeEU7S0FDSjtDQUNKLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhcmVudENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFyZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmlyc3RDaGlsZENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlyc3RjaGlsZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlY29uZENoaWxkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWNvbmRjaGlsZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVucmVsb2FkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy91bnJlYWxvZC1jb250YWluZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9yb290LmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogUm9vdENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJwYXJlbnRcIiwgY29tcG9uZW50OiBQYXJlbnRDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHBhdGg6IFwiZmlyc3RcIiwgY29tcG9uZW50OiBGaXJzdENoaWxkQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwic2Vjb25kXCIsIGNvbXBvbmVudDogU2Vjb25kQ2hpbGRDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogXCJ1bnJlbG9hZC1jb250YWluZXJcIiwgY29tcG9uZW50OiBVbnJlbG9hZENvbnRhaW5lckNvbXBvbmVudCB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==