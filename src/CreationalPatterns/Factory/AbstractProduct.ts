export namespace Product {

    export interface IProduct {
        articleName: string;
        growingArea: string;
        quality: string;
        articlePrice: number;
    }

    export abstract class AbstractProduct {

        protected productList: IProduct[];

        constructor() {
            this.productList = [];
            this.createProduct();
        }

        protected abstract createProduct(): void;

        getProductList(): IProduct[] {
            return this.productList;
        }

    }

}
