// Decorator (runs at every Method call):
export function disable(target: Object, methodName: string, descriptor: PropertyDescriptor) {
    descriptor.value = () => {
        throw new Error("method is disabled");
    }
}
