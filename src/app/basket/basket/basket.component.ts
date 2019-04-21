import { Component, OnInit } from "@angular/core";
import { BasketService } from 'src/app/core/services/basket.service';

@Component({
  selector: "sn-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss"]
})
export class BasketComponent implements OnInit {

  constructor(
    private basketService: BasketService,
  ) { }

  ngOnInit() {
    this.basketService.products.subscribe((basketProdcuts) => {
      console.log(basketProdcuts);
    });
  }

}
