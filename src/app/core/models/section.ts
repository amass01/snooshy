import { Product } from "./product";

export class Section {
    constructor(public title: string, public products: Product[], public visible: boolean) {}
}