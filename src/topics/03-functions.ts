interface ICharacter {
    name:string;
    hp:number;
    showHp: () => void;
}

function addNumbers (a:number, b:number) : number {
    return a+b;
}

const addNumbersArrow = (a:number, b:number) : number => a + b;

 
const result1 = addNumbers(1,2);
const result2 = addNumbersArrow(2,3);

console.log({
    result1,
    result2,
})


const multiply = (fn:number, sn:number) : number => fn * sn;

console.log({
    thirdNumber: multiply(1,4),
})

const healCharacter = (character : ICharacter, amount : number) : number => character.hp += amount;

const character : ICharacter = {
    name: "Juanpa",
    hp: 100,
    showHp () {
        console.log(`${this.name} has ${this.hp} lifepoints`)
    }
}

healCharacter(character, 20);

console.log(character.showHp());


export {};