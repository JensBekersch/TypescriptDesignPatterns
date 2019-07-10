import {Container} from "../../DependencyInjection/Container/Container";

export function Autowire(target : any, key : string) {

    let container = Container.instance;

    let importClassData = Reflect.getMetadata("design:type", target, key);

    container.register(key, importClassData.name);

}
