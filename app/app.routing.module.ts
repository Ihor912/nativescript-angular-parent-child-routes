import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ParentComponent } from "./components/parent.component";
import { FirstChildComponent } from "./components/firstchild.component";
import { SecondChildComponent } from "./components/secondchild.component";
import { UnreloadContainerComponent } from "./components/unrealod-container.component";
import { RootComponent } from "./components/root.component";

const routes: Routes = [
    { path: "", component: RootComponent },
    { path: "parent", component: ParentComponent,
        children: [
            { path: "first", component: FirstChildComponent },
            { path: "second", component: SecondChildComponent },
            { path: "unreload-container", component: UnreloadContainerComponent }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }