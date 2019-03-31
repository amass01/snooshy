import { Component, OnInit } from '@angular/core';

interface product {
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

  constructor() { }

  ngOnInit() {
  }

}
