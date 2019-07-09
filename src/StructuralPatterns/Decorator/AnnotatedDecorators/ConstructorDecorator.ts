export function capitalize() {
    return function<T extends {new (...args: any[]): {}}>(constructor: T): T {
        return class extends constructor {
            _a = "A";
            _b = "B";
        }
    }
}