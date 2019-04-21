import { Component, OnInit } from "@angular/core";
import { Section } from "../core/models/section";
import { Product } from "../core/models/product";
import { BasketService } from '../core/services/basket.service';

@Component({
  selector: "sn-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {

  public sections: Section[];

  constructor(
    private basketService: BasketService,
  ) {
    this.sections = [
      {
        title: "ראשונות",
        products: [
          {
            name: "חמוצים יפנים",
            price: 10,
            imgPath: "starters/tona.jpg",
          },
          {
            name: "אדממה",
            price: 15,
            imgPath: "starters/tona.jpg",
          },
          {
            name: "נאגטס עוף",
            price: 25,
            imgPath: "starters/naggets.jpg",
          },

          {
            name: "הום פרייז",
            price: 15,
            imgPath: "starters/tona.jpg",
          },

          {
            name: "אגרול",
            price: 15,
            imgPath: "starters/agrol.jpg",
          },

          {
            name: "כנפיים",
            price: 25,
            imgPath: "starters/tona.jpg",
          },
          {
            name: "סביצ'ה סלמון",
            price: 30,
            imgPath: "starters/sabicha.jpg",
          },
          {
            name: "ברוסקטה טונה",
            price: 30,
            description: "",
            imgPath: "starters/tona.jpg",
          },
        ],
        visible: true,
      },
      {
        title: "סלטים",
        products: [
          {
            name: "סלט ים",
            price: 40,
            imgPath: "salads/salad.jpg",
            description: "",
          },
          {
            name: "סלט פפאיה חריף",
            price: 30,
            imgPath: "salads/salad.jpg",
            description: "",
          },
          {
            name: "סלט הומפרייז",
            price: 30,
            imgPath: "salads/salad.jpg",
            description: "",
          },
        ],
        visible: false,
      },
      // {
      //   title: "מאודים",
      //   products: [
      //     {
      //       name: "",
      //       price
      //     }
      //   ],
      //   visible: false,
      // }
    ];
  }

  getImageFullUrl(imgPath: string) {
    return `url(../../../assets/img/products/hd/${imgPath})`;
  }

  toggleSection(section: Section) {
    section.visible = !section.visible;
  }

  addProductToBasket(product: Product) {
    this.basketService.addProductToBasket(product);
  }

  ngOnInit() {
  }

}
