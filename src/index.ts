import {ConcreteCommand} from "./BehavioralPatterns/Command[Simple]/ConcreteCommand";
import {BlackTeaFactory} from "./CreationalPatterns/Factory/BlackTeaFactory";
import {WhiteTeaFactory} from "./CreationalPatterns/Factory/WhiteTeaFactory";
import {DIContainer} from "./DependencyInjection/DIContainer/DIContainer";
import {Register} from "./DependencyInjection/DIContainer/Register";


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

//IoC
interface DummyA {
    da(): void;
}

interface DummyB {
    db(): void;
}

interface DummyC {
    dc(): void;
}

@Register("DummyA", [])
class TestA implements DummyA {
    da(): void {
        console.log("TestA was successfully instantiated!");
    }
}

@Register("DummyB", [])
class TestB implements DummyB {
    db(): void {
        console.log("TestB was successfully instantiated!");
    }
}

@Register("DummyC", ["DummyA","DummyB"])
class TestC implements DummyC {

    constructor(private _concreteA: DummyA, private _concreteB: DummyB) {}

    dc(): void {
        this._concreteA.da();
        this._concreteB.db();
        console.log("TestC was successfully instantiated!");
    }
}

let container = DIContainer.instance;
let c = container.resolve<DummyC>("DummyC");
c.dc();




