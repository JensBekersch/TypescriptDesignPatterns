import {Counter} from "./Counter";

export class TestSingleton {

    constructor() {
        let counter = Counter.instance;
        counter.count++;
    }

}