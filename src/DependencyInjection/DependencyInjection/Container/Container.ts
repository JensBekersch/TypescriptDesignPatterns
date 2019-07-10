export class Container {

    private static _instance: Container = new Container();
    private _dependencies: { [key: string]: Object } = {};

    constructor() {
        if (Container._instance) {
            throw new Error("Container cannot be instantiated by using the new-Operator");
        }
        Container._instance = this;
    }

    public static get instance(): Container {
        return Container._instance;
    }

    public register(key: string, implementation: any) {
        this._dependencies[key] = implementation;
    }

    get dependencies(): { [p: string]: Object } {
        return this._dependencies;
    }

}
