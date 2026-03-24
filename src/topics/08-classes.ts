

export class Person {
    // public name:string;
    // private address:string;

    constructor(
        public name:string, 
        private address:string = 'No Address'
    ) {}

    get getAddress() : string {
        return this.address;
    }

}

const ironman = new Person('Ironman');

console.log(ironman);
console.log(ironman.getAddress)