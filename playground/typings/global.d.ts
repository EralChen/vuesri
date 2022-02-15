type AnyFunc = (...args: any[]) => any
type Unpromisify<T> = T extends Promise<infer R> ? R : T;
type ApiReturnType<T extends (...args: unknown[]) => unknown> = Unpromisify<ReturnType<T>>
