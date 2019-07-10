import {DITestA} from "./DITestA";

export function Autowire(target : any, key : string) {
    var t = Reflect.getMetadata("design:type", target, key);
    console.log(`${key} type: ${t.name}`);
}