/*let js = "amazing";
if (js === "amazing") alert ("Javascript is FUN!");

console.log(10 + 20);
let firstName = "Jonas";
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'John');

javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

*/

/*let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;

var job = "teacher" //old way of declaring a variable 



console.log(ageJonas * 2, ageJonas / 10, 2**3);
// 2 ** 3 means 2*2*2

const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x+10 = 25
x *= 4; // x = x* 4 = 100
x++; // x = x + 1
x--;
x--; // x = x - 1 = 99

//Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >=18;



//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(now - 1991 > now - 2018);

let x,y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2 // division has an advantage over addition
console.log(ageJonas, ageSarah, averageAge);

//coding challenge 1

const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 92;
const jonhnsHeight = 1.95;

const marksBmi = marksWeight / (marksHeight ** 2);
const johnsBmi = johnsWeight / (jonhnsHeight ** 2);
console.log(marksBmi, johnsBmi);

const markHigherBmi = marksBmi > johnsBmi;

console.log(markHigherBmi);


const firstName = "Diana";
const job = "tester";
const birthYear = 1992;
const year = 2037;

const diana = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(diana);

const dianaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(dianaNew);

console.log(`Multiline
string
!`) //when using `` we can create multiline string by pressing enter




const age = 15;
//const isOldEnough = age >= 18;
if (age >= 18) {
    console.log("Sarah can start driving.");
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}


const yearOfBirth = 1991;
let century;
if (yearOfBirth <= 2000) {
    century = 20;
} else {
   century = 21;
}
console.log(century);


//coding challenge 2

const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 92;
const jonhnsHeight = 1.95;

const marksBmi = marksWeight / (marksHeight ** 2);
const johnsBmi = johnsWeight / (jonhnsHeight ** 2);
console.log(marksBmi, johnsBmi);


if(marksBmi > johnsBmi){
    console.log(`Mark's BMI (${marksBmi}) is higher than John's BMI (${johnsBmi}).`);
} else{
    console.log(`John's BMI (${johnsBmi}) is higher than Mark's BMI (${marksBmi}).`);
}



// type conversion
const inputYear = "1992";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Diana"));
console.log(typeof NaN);

console.log(String(23), 23);
 
// type coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);


//falsy values: 0, "", undefined, null, Nan

const age = 18;
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favorite = Number (prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23){
    console.log("23 is an amazing number.")
}
else if (favorite === 7) {
    console.log("7 is also cool.")
}
else if (favorite === 9) {
    console.log("9 is also cool.")
}
else{
    console.log("Number is not 23 or 7 or 9!")
}

if (favorite !== 23) console.log("Why not the 23?");



const hasDriversLicense = true; // A
const hasGoodVision = true; // B
 
console.log(hasDriversLicense && hasGoodVision); // true and true = true ; true and false = false
console.log(hasDriversLicense || hasGoodVision); // true or false = true ; 
console.log(!hasDriversLicense); // inverts the value, true becomes false and vice versa

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log("Sarah is able to drive.");
// }else {
//     console.log("Someone else should drive.");
// }

const isTired = true; // C

console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah is able to drive.");
}else {
    console.log("Someone else should drive.");
}
*/

// coding challenge 3

let dolphins1 = 150;
let dolphins2 = 150;
let dolphins3 = 150;
let dolphinsAverage = (dolphins1 + dolphins2 + dolphins3) / 3;

let koalas1 = 150;
let koalas2 = 150;
let koalas3 = 150;
let koalasAverage = (koalas1 + koalas2 + koalas3) / 3;

console.log("Dolphins:" + dolphinsAverage, "Koalas:" + koalasAverage);

const minScore = 100;
if(dolphinsAverage > koalasAverage && dolphinsAverage >= minScore){
    console.log("Dolphins won!")
}else if (dolphinsAverage === koalasAverage && dolphinsAverage >= minScore || koalasAverage >= minScore){
    console.log("It's a tie!");
}else if (dolphinsAverage > koalasAverage && dolphinsAverage >= minScore){
    console.log("Koalas won!");
}
else {
    console.log("No winner");
}


