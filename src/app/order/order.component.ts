import { Component, OnInit } from "@angular/core";

class Section {
  constructor(public title: string, public products: Product[], public visible: boolean) {}
}

class Product {
  constructor(public name: string, public price: number, public imgPath: string, public description?: string) {}
}

@Component({
  selector: "sn-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {

  public sections: Section[];

  constructor() {
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
            imgPath: "starters/tona.jpg",
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
      }
    ];
  }

  getImageFullUrl(imgPath: string) {
    return `url(../../../assets/img/products/hd/${imgPath})`;
  }

  toggleSection(section: Section) {
    section.visible = !section.visible;
  }

  ngOnInit() {
  }

}
