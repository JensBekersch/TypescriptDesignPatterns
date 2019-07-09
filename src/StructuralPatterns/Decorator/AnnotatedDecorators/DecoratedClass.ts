import {disable} from "./Decorator";
import {before} from "./FactoryDecorator";
import {capitalize} from "./ConstructorDecorator";

@capitalize()
export class DecoratedClass {

    private _a: string = "a";
    private _b: string = "b";

    //@disable
    foo(): void {
        console.log("Hello from foo!");
    }

    @before(() => { console.log("before bar") })
    bar(): void {
        console.log("Hello from bar!");
    }

    baz() {
        console.log(this._a, this._b);
    }

}