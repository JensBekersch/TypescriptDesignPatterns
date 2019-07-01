import {Product} from "./AbstractProduct";
import IProduct = Product.IProduct;

export abstract class AbstractTea implements IProduct {

    private _articleName: string;
    private _growingArea: string;
    private _quality: string;
    private _articlePrice: number;

    constructor(articleName: string, growingArea: string, quality: string, articlePrice: number) {
        this.articleName = articleName;
        this.growingArea = growingArea;
        this.quality = quality;
        this.articlePrice = articlePrice;
    }

    get articleName(): string {
        return this._articleName;
    }

    set articleName(value: string) {
        this._articleName = value;
    }

    get growingArea(): string {
        return this._growingArea;
    }

    set growingArea(value: string) {
        this._growingArea = value;
    }

    get quality(): string {
        return this._quality;
    }

    set quality(value: string) {
        this._quality = value;
    }

    get articlePrice(): number {
        return this._articlePrice;
    }

    set articlePrice(value: number) {
        this._articlePrice = value;
    }

}
