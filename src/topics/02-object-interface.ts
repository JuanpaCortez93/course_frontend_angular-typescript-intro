interface ICharacter {
    name:string;
    hp: number;
    skills: string[];
    hometown? : string;
}

// const skills : string[] = ['Bash', 'Counter', 'Healing'];

const strider : ICharacter = {
    name: "Strider",
    hp: 100,
    skills: ['Bash', 'Hunter']
}

console.log(strider);



export {};