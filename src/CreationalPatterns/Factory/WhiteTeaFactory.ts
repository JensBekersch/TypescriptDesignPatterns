import {Product} from "./AbstractProduct";
import AbstractProduct = Product.AbstractProduct;
import {WhiteTea} from "./WhiteTea";
import {TeaFlower} from "./TeaFlower";

export class WhiteTeaFactory extends AbstractProduct {

    createProduct(): void {
        this.productList.push(new WhiteTea());
        this.productList.push(new TeaFlower());
    }

}
