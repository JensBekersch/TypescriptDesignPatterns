import {ConcreteCommand} from "./BehavioralPatterns/Command[Simple]/ConcreteCommand";
import {BlackTeaFactory} from "./CreationalPatterns/Factory/BlackTeaFactory";
import {WhiteTeaFactory} from "./CreationalPatterns/Factory/WhiteTeaFactory";
import {Autowire} from "./DependencyInjection/InversionOfControl/Decorator/Autowire";
import {Container} from "./DependencyInjection/InversionOfControl/Container/Container";
import {Counter} from "./CreationalPatterns/Singleton/Counter";
import {TestSingleton} from "./CreationalPatterns/Singleton/TestSingleton";
import {TestLB} from "./LooseCoupling/impl/TestLB";
import {TestLA} from "./LooseCoupling/impl/TestLA";
import {CoffeemachineDeluxe} from "./StructuralPatterns/Decorator/Decorator/CoffeemachineDeluxe";
import {CoffeemachineFlavorDecorator} from "./StructuralPatterns/Decorator/Decorator/CoffeemachineFlavorDecorator";
import {CoffeemachineMelangeDecorator} from "./StructuralPatterns/Decorator/Decorator/CoffeemachineMelangeDecorator";
import {DecoratedClass} from "./StructuralPatterns/Decorator/AnnotatedDecorators/DecoratedClass";
import "reflect-metadata";
import {DITest} from "./Test/DITest";

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


// Loose Coupling

let testLooseCoupling = new TestLB(new TestLA());
testLooseCoupling.printMessageFromA();

// Decorator
let coffeemachineDeluxe = new CoffeemachineDeluxe();
let machineWithFlavorFeature = new CoffeemachineFlavorDecorator(coffeemachineDeluxe);
let machineWithDeluxeFeatures = new CoffeemachineMelangeDecorator(machineWithFlavorFeature);

machineWithDeluxeFeatures.turnOn();
machineWithDeluxeFeatures.brewMelange();
machineWithDeluxeFeatures.brewCoffeeWithFlavor();
machineWithDeluxeFeatures.turnOff();

// Method decorator
let decoratedClass = new DecoratedClass();
decoratedClass.bar();
decoratedClass.foo();
decoratedClass.baz();


// function Inject(ClassInjects: object, ClassInjected: any[]) {
//
//     //console.log(ClassInjects); //get names from constructor
//     //console.log(ClassInjected[0]);
//
//     //let inst = new ClassInjected[0]();
//     //new ClassInjected[0]();
//
//     console.log(ClassInjects);
//
//     return function<T extends {new (...args: any[]): {}}>(constructor: T) {
//         return class extends constructor {
//              _diTestA = new ClassInjected[0]();
//
//         }
//     }
// }
//
// function Autowire(target : any, key : string) {
//     var t = Reflect.getMetadata("design:type", target, key);
//     console.log(`${key} type: ${t.name}`);
// }
//
// class DITestA {
//
//     constructor() {
//
//     }
//
//     getMessage(): string {
//         return "Message from A";
//     }
// }
//
// @Inject(DITest, [DITestA])
// class DITest {
//
//     @Autowire
//     private _diTestA?: DITestA;
//
//     constructor(
//         _diTestA?: DITestA
//     ) {}
//
//     printMessage(): void {
//         console.log(this._diTestA.getMessage());
//     }
// }

let diTest = new DITest();
diTest.printMessage();



