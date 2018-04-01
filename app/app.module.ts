import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { ParentComponent } from "./components/parent.component";
import { FirstChildComponent } from "./components/firstchild.component";
import { SecondChildComponent } from "./components/secondchild.component";
import { AppRoutingModule } from "./app.routing.module";
import { UnreloadContainerComponent } from "./components/unrealod-container.component";
import { RootComponent } from "./components/root.component";

@NgModule({
  declarations: [AppComponent, RootComponent, ParentComponent, FirstChildComponent, SecondChildComponent, UnreloadContainerComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
