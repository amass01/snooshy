import { Component, OnInit } from "@angular/core";
import { BasketService } from "../services/basket.service";
import { Product } from "../models/product";

@Component({
  selector: "sn-tool-bar",
  templateUrl: "./tool-bar.component.html",
  styleUrls: ["./tool-bar.component.scss"]
})
export class ToolBarComponent implements OnInit {

  public basketItemsNumber: number;

  constructor(
    private basketService: BasketService,
  ) { }

  ngOnInit() {
    this.basketService.products.subscribe((basketProdcuts: Product[]) => {
      this.basketItemsNumber = basketProdcuts.length;
    });
  }

}
