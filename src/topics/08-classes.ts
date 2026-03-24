

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

export class Hero {

    constructor (
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person,
    ) {
    }
}

const tonyStark = new Person('Tony Stark', 'New York');
const ironman = new Hero('Ironman',45,'Tony',tonyStark);

console.log(ironman);
console.log(ironman.person.getAddress);