import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <StackLayout>
      <ActionBar title="My App" class="action-bar"></ActionBar>
      <page-router-outlet></page-router-outlet>
    </StackLayout>
  `
})
export class AppComponent {
  
}
