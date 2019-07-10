export function Inject(ClassInjects: any, ClassInjected: any[]) {

    //console.log(ClassInjects); //get names from constructor
    //console.log(ClassInjected[0]);

    //let inst = new ClassInjected[0]();
    //new ClassInjected[0]();
    console.log("Inject: --------------------------------------------------------------");

    let a = new ClassInjects();
    let array = Object.getOwnPropertyNames(a);
    let arr2 = Object.getPrototypeOf(a);
    console.log(array[0]);
    console.log(typeof array[0]);
    console.log(arr2.constructor.prototype);

    console.log(ClassInjects);
    console.log(ClassInjected[0]);

    console.log("Inject: --------------------------------------------------------------");
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            _diTestA = new ClassInjected[0]();

        }
    }
}