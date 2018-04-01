import { Component } from "@angular/core";

@Component({
  selector: "unreload-container",
  template: `
    <StackLayout width="300" height="50" backgroundColor="#FFc400"></StackLayout>
  `
})
export class UnreloadContainerComponent {
  constructor() {
    console.log('UnreloadContainer constructor');
  }
  
  ngOnInit() {
    console.log('UnreloadContainer OnInit');
  }
}
