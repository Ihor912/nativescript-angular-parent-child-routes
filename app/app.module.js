"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var parent_component_1 = require("./components/parent.component");
var firstchild_component_1 = require("./components/firstchild.component");
var secondchild_component_1 = require("./components/secondchild.component");
var app_routing_module_1 = require("./app.routing.module");
var unrealod_container_component_1 = require("./components/unrealod-container.component");
var root_component_1 = require("./components/root.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, root_component_1.RootComponent, parent_component_1.ParentComponent, firstchild_component_1.FirstChildComponent, secondchild_component_1.SecondChildComponent, unrealod_container_component_1.UnreloadContainerComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule, app_routing_module_1.AppRoutingModule],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLGlEQUErQztBQUMvQyxrRUFBZ0U7QUFDaEUsMEVBQXdFO0FBQ3hFLDRFQUEwRTtBQUMxRSwyREFBd0Q7QUFDeEQsMEZBQXVGO0FBQ3ZGLDhEQUE0RDtBQVE1RDtJQUFBO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBTnJCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLDRCQUFZLEVBQUUsOEJBQWEsRUFBRSxrQ0FBZSxFQUFFLDBDQUFtQixFQUFFLDRDQUFvQixFQUFFLHlEQUEwQixDQUFDO1lBQ25JLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUscUNBQWdCLENBQUM7WUFDL0MsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBhcmVudENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFyZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmlyc3RDaGlsZENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlyc3RjaGlsZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlY29uZENoaWxkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWNvbmRjaGlsZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFVucmVsb2FkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy91bnJlYWxvZC1jb250YWluZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9yb290LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIFJvb3RDb21wb25lbnQsIFBhcmVudENvbXBvbmVudCwgRmlyc3RDaGlsZENvbXBvbmVudCwgU2Vjb25kQ2hpbGRDb21wb25lbnQsIFVucmVsb2FkQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgQXBwUm91dGluZ01vZHVsZV0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=