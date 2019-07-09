import {ConcreteCommand} from "./BehavioralPatterns/Command[Simple]/ConcreteCommand";
import {BlackTeaFactory} from "./CreationalPatterns/Factory/BlackTeaFactory";
import {WhiteTeaFactory} from "./CreationalPatterns/Factory/WhiteTeaFactory";
import {Autowire} from "./DependencyInjection/Decorator/Autowire";
import {Container} from "./DependencyInjection/Container/Container";
import {Counter} from "./CreationalPatterns/Singleton/Counter";
import {TestSingleton} from "./CreationalPatterns/Singleton/TestSingleton";

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

// Singleton
let counter = Counter.instance;
counter.count++;
console.log("Initialisere mit Wert 1: " + counter.count);
new TestSingleton();
console.log("TestSinglton Klasse erhöht Counter um 1: " + counter.count);
// Command Pattern
console.log("Command Pattern output: ");
let cmd = new ConcreteCommand();
cmd.executeCommands();

//IoC
interface IDummyA {
    da(): void;
}

interface IDummyB {
    db(): void;
}

interface IDummyC {
    dc(): void;
}

@Autowire("IDummyA", [])
class TestA implements IDummyA {
    da(): void {
        console.log("TestA was successfully instantiated!");
    }
}

@Autowire("IDummyB", [])
class TestB implements IDummyB {
    db(): void {
        console.log("TestB was successfully instantiated!");
    }
}

@Autowire("IDummyC", ["IDummyA","IDummyB"])
class TestC implements IDummyC {

    constructor();
    constructor(private _concreteA?: IDummyA, private _concreteB?: IDummyB) {}

    dc(): void {
        this._concreteA.da();
        this._concreteB.db();
        console.log("TestC was successfully instantiated!");
    }
}

let container = Container.instance;
let c = container.resolve<IDummyC>("IDummyC");
c.dc();




