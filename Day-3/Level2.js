let height = prompt("Enter height");
let width = prompt("Enter width");
console.log(`Area of triangle is ${height*width/2}`);

let a = prompt("Enter side a");
let b = prompt("Enter side b");
let c = prompt("Enter side c");
console.log(`Perimeter of triangle is ${parseInt(a)+parseInt(b)+parseInt(c)}`);

let h = prompt("Enter height");
let w = prompt("Enter width");
console.log(`Perimeter of rectangle ${2*(h + w)}`);
console.log(`Area of rectangle ${h * w}`);

let radius = prompt("Enter radius")
const PI = 3.14;
console.log(`Perimeter of circle is ${2*PI*radius}`);
console.log(`Area of circle ${PI*radius*radius}`);

let x = prompt('Enter X')
console.log(`Value of Y = ${(x*x) + (6*x) + 9} for X = ${x}`)

let firstName = "Chand";
let lastName = "Bud";
let len = firstName.length > lastName.length ? "longer" : "shorter";
let result = `Your first name, ${firstName} is ${len} than your family name, ${lastName}`;
console.log(result);

let myAge = 21;
let yourAge = 75;
console.log(`I am ${yourAge - myAge} years younger than you`);

let age = prompt('Enter age');
console.log(`You lived ${age * 365 * 24 * 60 * 60} seconds`);

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
let hour = d.getHours();
let min = d.getMinutes();

console.log(`${year}-${month}-${date} ${hour}:${min}`);
console.log(`${date}-${month}-${year} ${hour}:${min}`);
console.log(`${date}/${month}/${year} ${hour}:${min}`);
