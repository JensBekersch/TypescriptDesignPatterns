import {Product} from "./AbstractProduct";
import AbstractProduct = Product.AbstractProduct;
import {BlackTea} from "./BlackTea";

export class BlackTeaFactory extends AbstractProduct {

    createProduct(): void {
        this.productList.push(new BlackTea());
    }

}
