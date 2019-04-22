import { Component, OnInit } from "@angular/core";
import { BasketService } from 'src/app/core/services/basket.service';
import { Product } from 'src/app/core/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: "sn-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss"]
})
export class BasketComponent implements OnInit {

  constructor(
    private basketService: BasketService,
  ) { }

  ngOnInit() { }

  getProducts(): Observable<Product[]> {
     return this.basketService.products;
  }

}
