console.log('********* Loops *******')

for(let i =1; i<=10; i++){
    console.log("Lift weight " + [i] + " times ");
}

const myInfo2 = [
    'Shankar',
    'BS',
    25,
    'Web Developer',
    ['Michael', 'Sarah', 'Jane'],
    false,
    0.56,
]

for(let i = 0; i<myInfo2.length; i++){
    console.log(myInfo2[i],  typeof myInfo2[i]);
}


const years2 = [1991, 1993, 1996, 1998, 2001];
const ages = [];

for(let i =0; i<years2.length; i++){
    const currentAge = 2037 - years2[i];
    ages.push(currentAge);
}
console.log(ages);


console.log("----//Continue and Break ---");
//Continue and Break;
for(let i=0; i<myInfo2.length; i++){
    if(typeof myInfo2[i] !== 'string') continue;

    console.log(myInfo2[i], typeof myInfo2[i]);
}

for(let i=0; i<myInfo2.length; i++){
    if(typeof myInfo2[i] === 'number') break;

    console.log(myInfo2[i], typeof myInfo2[i]);
}


const myInfo3 = [
    'Jonas',
    'Jane',
    28,
    'Sofware Developer',
    ['Michael', 'Sarah', 'Jane'],
    false,
]

console.log('---- //looping backwards --- ');

for(let i = myInfo3.length -1; i >= 0; i--){
    console.log(i, myInfo3[i]);
}

//Loops inside a Loop

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`=== Starting exercise ${exercise} ===`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Lifting Weight repetition ${rep}`);
    }
}


//WHILE LOOP
// for(let rep = 1; rep < 10; rep++){
//     console.log(`Lifting Weight repetition ${rep}`);
// }
console.log("==== WHILE LOOP ==== ");
let rep = 1;
while(rep <= 10){
    console.log(`taking Weight ${rep} reps`);
    rep++;
}


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr){
    let str = '';
    for(let i = 0; i <arr.length; i++){
        str = str + `${arr[i]} Celcius`;
    }
    console.log(str);
}
printForecast(data1);