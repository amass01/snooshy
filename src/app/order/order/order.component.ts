import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'sn-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public products: Product[]; 

  constructor() {
    this.products = [
      {
        name: 'חמוצים יפנים',
        price: 10,
        description: '',
      }
    ]
  }

  ngOnInit() {
  }

}
