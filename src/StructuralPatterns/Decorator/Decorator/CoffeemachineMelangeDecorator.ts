import {CoffeemachineComponentDecorator} from "./CoffeemachineComponentDecorator";
import {Coffeemachine} from "./Coffeemachine";

export class CoffeemachineMelangeDecorator extends CoffeemachineComponentDecorator {

    constructor(coffeemachine: Coffeemachine) {
        super(coffeemachine);
    }

    brewMelange(): void {
        console.log("Machine is brewing Melange...");
    }
}