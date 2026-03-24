

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

export class Hero extends Person {
    constructor (
        public alterEgo:string,
        public age:number,
        public realName:string,
    ) {
        super(realName)
    }
}

const ironman = new Hero('Ironman',45,'Tony');

console.log(ironman);
console.log(ironman.getAddress)