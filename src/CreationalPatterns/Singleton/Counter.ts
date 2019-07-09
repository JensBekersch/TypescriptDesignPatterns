export class Counter {
    count: number = 0;

    constructor() {
        if(Counter._instance) {
            throw new Error("Cannot instantiate Singelton using the new Operator!");
        }
        Counter._instance = this;
    }

    private static _instance: Counter = new Counter();

    public static get instance(): Counter {
        return Counter._instance;
    }
}