interface IAudioPlayer {
    audioVolume:number;
    songDuration:number;
    song:string;
    details:IDetails;
}

interface IDetails {
    author:string;
    year:number;
}

const audioPlayer : IAudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    } 
}

// const {details} = audioPlayer;
// const {author} = details;
// console.log(author);

const dbz : string[] = ['Goku', 'Vegeta', 'Trunks'];

const [,,trunks] = dbz;

console.log('Personaje 3: ', trunks);

export {};