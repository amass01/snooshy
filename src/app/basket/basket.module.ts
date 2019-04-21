import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { BasketComponent } from "./basket/basket.component";

@NgModule({
  declarations: [
    BasketComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class BasketModule { }
