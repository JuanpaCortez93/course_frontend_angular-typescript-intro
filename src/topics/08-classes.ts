

export class Person {
    public name:string;
    private address:string;

    constructor(name:string, address:string) {
        this.name = name;
        this.address = address;
    }

    get getAddress() : string {
        return this.address;
    }

}

const ironman = new Person('Ironman', 'New York');

console.log(ironman.name);
