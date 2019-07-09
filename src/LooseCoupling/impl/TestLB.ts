import {ITestB} from "../ITestB";
import {ITestA} from "../ITestA";

export class TestLB implements ITestB {

    constructor(private _message: ITestA) {}

    printMessageFromA(): void {
        console.log(this._message.printMessage());
    }
}