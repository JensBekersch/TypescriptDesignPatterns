import {DIContainer} from "./DIContainer";

export function Register(name: string, dependencies: string[]): Function {

    let container = DIContainer.instance;

    return function<T extends {new(...args: any[]): {}}>(constructor: T) {
        container.register(name, dependencies, constructor);
    }
}