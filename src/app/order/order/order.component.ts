import { Component, OnInit } from '@angular/core';

interface Products {
  starters: Product[],
}

interface Product {
  name: string;
  price: number;
  description?: string;
  imgPath: string;
}

@Component({
  selector: 'sn-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public products: Products; 

  constructor() {
    this.products = {
      starters: [
        {
          name: 'חמוצים יפנים',
          price: 10,
          imgPath: 'starters/tona.jpg',
        },
        {
          name: 'אדממה',
          price: 15,
          imgPath: 'starters/tona.jpg',
        },
        {
          name: 'נאגטס עוף',
          price: 25,
          imgPath: 'starters/tona.jpg',
        },

        {
          name: 'הום פרייז',
          price: 15,
          imgPath: 'starters/tona.jpg',
        },

        {
          name: 'אגרול',
          price: 15,
          imgPath: 'starters/tona.jpg',
        },

        {
          name: 'כנפיים',
          price: 25,
          imgPath: 'starters/tona.jpg',
        },
        {
          name: "סביצ'ה סלמון",
          price: 30,
          imgPath: 'starters/tona.jpg',
        },
        {
          name: "ברוסקטה טונה",
          price: 30,
          description: '',
          imgPath: 'starters/tona.jpg',
        },
      ],
    }
  }

  getImageFullUrl(imgPath: string) {
    return `url(../../../assets/img/products/hd/${imgPath})` 
  }

  ngOnInit() {
  }

}
