function classDecorator<T extends { new(...args:any[]) : {}}>(constructor:T) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'Override'
    }
}

@classDecorator
class Superclass {
    public myProperty:string = 'ABC123';

    print() {
        console.log('Hello world');
    }
}

console.log(Superclass);

const myClass = new Superclass();
console.log(myClass);