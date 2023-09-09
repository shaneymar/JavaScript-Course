console.log("Course Started");

let age = 26;
age = 27 // values can be reassigned (can able to mutuate the values)

const birthYear = 1998; //(const is static values, where  we dont need to change the values, immutable values)

const thisYear = 2024;
const ageShankar =  thisYear - 1998;
const ageBrother = thisYear - 2001
console.log(ageShankar, ageBrother);

//Assignment Operators

let x = 15;
x += 10; //x = x + 10 = 25
x *= 4;  //x = x * 4(25 * 4) = 100
x++; //x= x+1 (100 +1) = 101
x--; //x = x-1(101-1) = 100
x--; //x = x-1(100-1) = 99
console.log(x);

//comparison Operators

console.log( ageShankar > ageBrother); //(26 > 23) see line 11
// generate boolean values of true or false


//Generator Function

function* generator(){
	yield 10;
	yield 20;
}
const gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//Strings & Template Literals
const firstName = "Shankar";
const lastName  = "BS";
const job       = "Web Developer";

const about = "I'm" + " " + firstName + " " + lastName +  " " + "a" + " " + job; 
const aboutMe = `I'm ${firstName} ${lastName} and working as ${job}`;
console.log(about);
console.log(aboutMe);

// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too


//multiple line strings using template literals
console.log(`String in 
	new 
	line`);


//If-Else Statements

const driveAge = 17;

if(driveAge >= 18){
	console.log("You're ready to Drive 🤩");
}
else{
	const ageLeft = 18 - driveAge;
	console.log(`No! you should wait for ${ageLeft} years to drive❌`);
}


const birthOfYear = 2018;

let century = '';

if (birthOfYear <= 2000){
	century = 20;
}
else{
	century = 21;
}
console.log(century);

//challenge 2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".


//Type Conversion

//we need to manually convert the type from one type to another

//Type Coercion

//JS Engine automatically convert one type to another

const inputYear = '1991';
console.log(Number(inputYear) + 9);

console.log(typeof String(23));

//Type Coercion

console.log('I am ' + 23 + 'years old'); //automatically converts into string

//Truthy and Falsy Values:

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Sha")); //true
console.log(Boolean({})); //true (object)
console.log(Boolean('')); //false


//Equality Operators

const xAge = 18;
if(xAge === 18){
	console.log("you're an adult now");
}
// === (Strict Equality Operator)
//It doesn't do Type Coercion
// 18 === 18 (true)
// 18 === 19 (False)

// == (Loose Equality Operator)
// It does Type Coercion



 //Boolean Logic

 //AND, OR, NOT

 const hasDrivingLicense = true;
 const hasGoodVision = false;

 console.log(hasDrivingLicense && hasGoodVision);
 console.log(hasDrivingLicense || hasGoodVision);
 console.log(!hasGoodVision);

 const shouldDrive = hasGoodVision && hasDrivingLicense;

 if(shouldDrive){
 	console.log("She can drive");
 }
 else{
 	console.log("someone has to drive");
 }

 //Switch Statement

 const day = 'Tuesday';

 switch(day){
 	case 'Monday':
 		console.log('Plan Course Structure');
 		break;
 	case 'Tuesday':
 		console.log("Get into HTML and CSS");
 		break;
 	default:
 		console.log("Not a Valid Day");
 }

 //COnditional Operator (Ternary):

 const myAge = 17;
 myAge >= 18 ? console.log('true') : console.log('false');

//  CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430