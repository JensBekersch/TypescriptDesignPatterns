// Decorator Factory (runs only once!):
export function before(hook: Function) {
    return function <T extends Function>(target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        return {
            get: function (this: T) {
                let originalMethod = descriptor.value!.bind(this);
                hook = hook.bind(this);

                return () => {
                    hook();
                    originalMethod();
                }
            }
        }
    }
}