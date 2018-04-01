import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "root",
  template: `<Button text="To View" (tap)="navigateToView()" class="btn btn-primary"></Button>`
})
export class RootComponent {
    public constructor(private router: Router) {}

    public navigateToView() {
        this.router.navigate(["parent"]);
    }
}
