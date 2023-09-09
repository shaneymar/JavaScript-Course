"use strict"; //easier to write secure JS code
//create visible errors while writing JS code

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) console.log("I can Drive:😍");

//Functions
function MyFunction() {
  console.log("First Function");
}

//calling or Running or Invoking a function
MyFunction();
MyFunction();
MyFunction();

function foodProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and 
    ${oranges} oranges.`;
  return juice;
}
const myJuice = foodProcessor(2, 4);
console.log(myJuice);
console.log(foodProcessor(5,0));


//function declaration
function calcAge1(birthYear){
    const age = 2023 - birthYear;
    return age;
}
console.log(calcAge1(1998));

//function Expression
const calcAge2 = function(birthYear2){
    return 2023 - birthYear2;
}
console.log(calcAge2(1995));


//Arrow Functions

const functionName = (birthYear) => {
    return 2025 - birthYear;
}
console.log(functionName(1993));

const yearsForRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    return `${firstName} retires in ${retirementAge} years`;
}
console.log(yearsForRetirement(1991, "Shankar"));

//Functions calling Other Functions

function cutFruitPieces(fruit){
    return fruit * 4; // 2 * 4 (for apple) // 4 * 4 (for orange)

}
function foodProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    console.log("Apple Pieces:", applePieces);
    const orangePieces = cutFruitPieces(oranges);
    console.log("orange Pieces:", orangePieces);

    const juice = `Juice with ${apples} apples and 
      ${oranges} oranges.`;
    return juice;
  }
  
  console.log(foodProcessor(2, 4));

  const calcAverage = (a,b,c) => {
        const averageAge = (a + b + c ) /3;
        return averageAge;
  }
  const scoreDolphins = calcAverage(44,23, 41);
  const scoreKoalas = calcAverage(94,56,87);
  console.log(scoreDolphins, scoreKoalas);

  const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >=  2 * avgKoalas){
        console.log(`Dolphins won trophy ${avgDolphins} vs. ${avgKoalas}`);
    }
    else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas won Trophy ${avgKoalas} vs. ${avgDolphins}`);
    }
    else{
        console.log("No one Wins");
    }
  }
checkWinner(scoreDolphins, scoreKoalas);