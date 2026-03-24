export function whatsMyType<T>(argument:T) : T {
    return argument;
}

const amIString = whatsMyType<string>('Hola mundo');
console.log(amIString.toLowerCase());

const amINumber = whatsMyType<number>(3);
console.log(amINumber.toExponential(2));