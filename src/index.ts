import {ConcreteCommand} from "./BehavioralPatterns/Command[Simple]/ConcreteCommand";
import {BlackTeaFactory} from "./CreationalPatterns/Factory/BlackTeaFactory";
import {WhiteTeaFactory} from "./CreationalPatterns/Factory/WhiteTeaFactory";


// Factory
console.log("Factory Method output: ");
let blackTea = new BlackTeaFactory();
let whiteTea = new WhiteTeaFactory();

for (let tea of blackTea.getProductList()) {
    console.log(tea);
}

for (let tea of whiteTea.getProductList()) {
    console.log(tea);
}
// Command Pattern
console.log("Command Pattern output: ");
let cmd = new ConcreteCommand();
cmd.executeCommands();




