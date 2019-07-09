import {Container} from "../Container/Container";

export function Autowire(name: string, dependencies: string[]): Function {

    let container = Container.instance;

    return function<T extends {new(...args: any[]): {}}>(constructor: T) {
        container.register(name, dependencies, constructor);
    }
}