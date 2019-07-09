import {Coffeemachine} from "./Coffeemachine";

export class CoffeemachineDeluxe extends Coffeemachine {

    turnOn(): void {
        console.log("CoffeemachineDeluxe was turned on...");
    }

    turnOff(): void {
        console.log("CoffeemachineDeluxe was turned off....");
    }

}