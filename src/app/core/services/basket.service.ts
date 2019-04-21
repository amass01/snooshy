import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { BehaviorSubject, Subject, Observable } from "rxjs";


export function asObservable(subject: Subject<any>) {
    return new Observable(fn => subject.subscribe(fn));
}


@Injectable({
  providedIn: "root"
})
export class BasketService {

  private productsSub: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  get products() {
    return asObservable(this.productsSub);
  }

  addProductToBasket(product: Product) {
    const currProducts = this.productsSub.getValue();
    currProducts.push(product);
    this.productsSub.next(currProducts);
  }
}
