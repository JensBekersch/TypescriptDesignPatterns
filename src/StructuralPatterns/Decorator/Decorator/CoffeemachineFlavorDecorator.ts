import {CoffeemachineComponentDecorator} from "./CoffeemachineComponentDecorator";
import {Coffeemachine} from "./Coffeemachine";

export class CoffeemachineFlavorDecorator extends CoffeemachineComponentDecorator {

    constructor(coffeemachine: Coffeemachine) {
        super(coffeemachine);
    }

    brewCoffeeWithFlavor(): void {
        console.log("Machine is brewing flavored coffee...");
    }
}