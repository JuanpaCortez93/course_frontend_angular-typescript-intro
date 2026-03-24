export interface Passenger {
    name:string;
    children?:string[];
}

const passenger1 : Passenger = {
    name:'Juan'
}

const passenger2 : Passenger = {
    name:'Pablo',
    children: ['Natalia', 'Elizabeth']
}

const printChildren = (passenger : Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    return howManyChildren;
}

console.log(printChildren(passenger2));
console.log(printChildren(passenger1));