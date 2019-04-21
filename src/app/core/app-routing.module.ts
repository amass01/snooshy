import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderComponent } from "../order/order.component";
import { BasketComponent } from "../basket/basket/basket.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    data: {
      animation: "Home"
    }
  },
  {
    path: "order",
    component: OrderComponent,
    data: {
      animation: "Order"
    }
  },
  {
    path: "basket",
    component: BasketComponent,
    data: {
      animation: "Basket"
    }
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
