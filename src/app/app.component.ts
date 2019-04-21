import { slideInAnimation } from "./core/route-animations";
import { Component } from "@angular/core";

@Component({
  selector: "sn-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    slideInAnimation,
  ],
})
export class AppComponent { }
