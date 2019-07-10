import {Container} from "../Container/Container";

export function Inject(ClassInjects: any, ClassInjected: any[]) {

    let container = Container.instance;
    let autowired = container.dependencies;
    let injectables: any = [];
    let injectCounter = 0;

    for(let key of Object.keys(autowired)) {
        for(let i=0; i<ClassInjected.length; i++) {
            if(ClassInjected[i].name === autowired[key]) {
                injectables.push(injectCounter);
                injectables[injectCounter] = {
                    "key": key,
                    "classObject": ClassInjected[i]
                }
                injectCounter++;
            }
        }
    }
    console.log(injectables);
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {

        // for(let i=0; i<injectables.length; i++) {
        //
        //     let localName: any = injectables[i].key;
        //     let classObject: any = injectables[i].classObject;
        //
        //
        //
        //     return class extends constructor {
        //         localName = new classObject();
        //     }
        // }
    }
}