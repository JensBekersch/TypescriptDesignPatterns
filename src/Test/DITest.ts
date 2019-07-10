import {Inject} from "../DependencyInjection/DependencyInjection/Decorator/Inject";
import {DITestA} from "./DITestA";
import {Autowire} from "../DependencyInjection/DependencyInjection/Decorator/Autowire";
import {IDITest} from "./IDITest";

@Inject(DITest, [DITestA])
export class DITest implements IDITest {

    @Autowire
    public _diTestA?: DITestA;

    constructor(
        _diTestA?: DITestA
    ) {
        this._diTestA = _diTestA;
    }

    printMessage(): void {
        console.log(this._diTestA.getMessage());
    }

}
