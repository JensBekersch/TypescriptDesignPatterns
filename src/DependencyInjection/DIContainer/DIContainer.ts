export class DIContainer {

    private static _instance: DIContainer = new DIContainer();
    private _dependencies: { [key: string]: Object } = {};

    constructor() {
        if (DIContainer._instance) {
            throw new Error("Container cannot be instantiated by using the new-Operator");
        }
        DIContainer._instance = this;
    }

    public static get instance(): DIContainer {
        return DIContainer._instance;
    }

    register(name: string, dependencies: string[], implementation: any) {
        if (this._dependencies[name]) {
            throw new Error("Dependency already registered");
        }
        let dependenciesImplementations = this.getDependenciesImplementations(dependencies);
        this._dependencies[name] = new implementation(...dependenciesImplementations);
    }

    resolve<T>(name: string) : T {
        if (!this._dependencies[name]) {
            throw new Error("Unresolved dependency $[name]");
        }
        return this._dependencies[name] as T;
    }

    private getDependenciesImplementations(names: string[]) : Object[] {
        return names.map(name => this.resolve(name));
    }
}