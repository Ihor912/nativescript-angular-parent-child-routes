import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "parent",
  template: `
    <StackLayout width="150" height="300" backgroundColor="#FF00FF">
        <Label text="Parent Component" class="h3"></Label>
        <unreload-container></unreload-container>
        <Button text="To First" (tap)="navigateToFirstChild()" class="btn btn-primary"></Button>
        <Button text="To Second" (tap)="navigateToSecondChild()" class="btn btn-primary"></Button>
        <router-outlet></router-outlet>
    </StackLayout>
  `
})
export class ParentComponent {
    public constructor(private router: Router) {}

    public navigateToFirstChild() {
        this.router.navigate(["/parent/first"]);
    }

    public navigateToSecondChild() {
        this.router.navigate(["/parent/second"]);
    }
}
