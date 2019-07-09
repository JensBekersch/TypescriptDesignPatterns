import {Coffeemachine} from "./Coffeemachine";

export class CoffeemachineComponentDecorator extends Coffeemachine {

    constructor(private _coffeemachine: Coffeemachine) {
        super();
    }

    turnOn(): void {
        this._coffeemachine.turnOn();
    }

    turnOff(): void {
        this._coffeemachine.turnOff();
    }

    brewCoffeeWithFlavor(): void {
        this._coffeemachine.brewCoffeeWithFlavor();
    }

    brewMelange(): void {
        this._coffeemachine.brewMelange();
    }

}
