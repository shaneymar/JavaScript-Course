console.log("/******Arrays******/");

const friends = ['Shankar', 'Pramod', 'Pavan', 'Sourav'];
console.log(friends);
console.log(friends[0]); //Shankar
console.log(friends[1]); //Pramod
console.log(friends[2]); // Pavan
console.log(friends[3]); //Sourav

friends[2] = 'Jason'; //Updating Pavan with Jason
console.log(friends);

//another way of creating array
const years = new Array(1991, 1993, 1998, 2001);
console.log(years[1]); //1993
console.log(years.length); //4
console.log(years.length - 1); // 4 -1 = 3

//******Array Methods*************

const friendsList = ['Shankar', 'Pramod', 'Pavan', 'Sourav'];

//add new value to last
friendsList.push('Jacob');
console.log(friendsList); //['Shankar', 'Pramod', 'Pavan', 'Sourav', 'Jacob']

//remove value from last
friendsList.pop();
console.log(friendsList); //['Shankar', 'Pramod', 'Pavan', 'Sourav'];

//add value to starting of array
friendsList.unshift('Jane');
console.log(friendsList); //['Jane', 'Shankar', 'Pramod', 'Pavan', 'Sourav']

//remove value from first 
friendsList.shift();
console.log(friendsList); //['Shankar', 'Pramod', 'Pavan', 'Sourav']

//finding location of element in Array
console.log(friendsList.indexOf('Pavan')); //2

//Includes (ES6) Features
console.log(friendsList.includes('Shankar')); //true
console.log(friendsList.includes('Aishwerya')); //false


if (friendsList.includes('Pramod')){
    console.log("Yay! You have friend named Pramod");
}
else{
    console.log("Name not in List");
}


//Objects

const myInfo = {
        'firstName' : 'Shankar',
        'lastName' : 'BS',
        'age'  : 25,
        'job'  : 'Web Developer',
        'isIndian' : true,
        'dOYear'  : 1998,
        'friends' : ['Michael', 'Sarah', 'Jane'],
}
console.log(myInfo);

//DOT Notation

console.log(myInfo.firstName); //Shankar

//Bracket Notation
console.log(myInfo['age']); //25

const nameProp = 'Name';
console.log(myInfo['first' + nameProp ]); 
console.log(myInfo['last' + nameProp ]);

//Example

// const interestedIn = prompt("What do you want to know about myInfo ? choose b/w firstName, lastName, age?");
// console.log(myInfo[interestedIn]);

// if(myInfo[interestedIn]){
//     console.log(myInfo[interestedIn]);
// }
// else{
//     console.log("Wrong Request");
// }


//Challenge

console.log(`${myInfo.firstName} has ${myInfo.friends.length} friends and his best friend is called ${myInfo.friends[0]}`);


//Object Methods

const person = {
    firstName: "John",
    lastName: "Doe",
    eyeColor: "blue",
    isIndian: true,
    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};

console.log(person.calcAge());

//challenge
const jonas = {
    age: 46,
    hasDriversLicense : false,
}