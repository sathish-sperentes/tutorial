// Objects in Javascript examples
console.log();
console.log("##################### Example 1 #####################");
console.log();
const obj = {};

obj.color = "Yellow";
obj["not an identifier"] = 3;

// New in ES6 are symbols: a new data type representing unique tokens
// Symbols are created with the Symbol() constructor
const RED = Symbol();
const ORANGE = Symbol("The color of a sunset!");
const SIZE = Symbol();
obj[SIZE] = 8;

obj["not an identifier"];
obj["color"];
obj[SIZE];

console.log("Print obj values: \n", {obj});
console.log("Symbols is a new data type in ES6. ", "\n",
    "Value of symbol assigned to RED is: ", RED, "\n",
    "Value of symbol assigned to ORANGE is: ", ORANGE)

// Example 2 using const
console.log();
console.log("##################### Example 2 #####################");
console.log();
const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = { name: 'Sam', age: 4 };

const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfaimily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};

// Differents ways to access the values in an object
console.log("Example of object nested: \n", {sam3});
console.log("Nested object values can be accessed by the following ways: ");
console.log("1. sam3.classification.family: ", sam3.classification.family);
console.log("2. sam3['classification'].family: ", sam3["classification"].family);
console.log("3. sam3.classification['family']: ", sam3.classification["family"]);
console.log("4. sam3['classification']['family']: ", sam3["classification"]["family"]);

sam3.speak = function() { return "Meow!"; };  // Add a function to object sam3
console.log("Speak function added and called for sam3 object: ", sam3.speak());

// Arrays in Javascript
console.log();
console.log("##################### Example 3 #####################");
console.log();
const a1 = [1, 2, 3, 4];
const a2 = [1, 'two', 3, null];
const a3 = [
    "What the hammer?  What the chain?",
    "In what furnace was thy brain?",
    "What the anvil?  What dread grasp",
    "Dare its deadly terrors clasp!",
];
console.log("Array a3 values: \n", a3);
const a4 = [
    { name: 'Ruby', hardness: 9 },
    { name: 'Diamond', hardness: 10 },
    { name: 'Topaz', hardness: 8 },
];
const a5 = [
    [1, 2, 3],
    [2, 4, 6],
];
const arr = ['a', 'b', 'c'];
console.log("New Array: ", arr, "\nThe Array length is: ", arr.length);

// Date object
console.log();
console.log("##################### Example 4 #####################");
console.log();
const now = new Date();
console.log("Current Date and Time: ", now);

const halloweenParty = new Date(2021, 11, 25, 17, 35); // Date(Year, Month, Date, Hour, Minute, Seconds)
console.log("Date provided is: ", halloweenParty);
console.log("Extract Year: ", halloweenParty.getFullYear());
console.log("Extract Month: ", halloweenParty.getMonth());
console.log("Extract Date: ", halloweenParty.getDate());
console.log("Extract Hours: ", halloweenParty.getHours());
console.log("Extract Minutes: ", halloweenParty.getMinutes());
console.log("Extract Seconds: ", halloweenParty.getSeconds());
console.log("Extract Milliseconds: ", halloweenParty.getMilliseconds());
console.log("Show Time in default format: ", halloweenParty.getTime());

// Regular Expressions
// extremely simple email recognizer
console.log();
console.log("##################### Example 5 #####################");
console.log();
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
console.log("Regular Expression example for email: ", email);
// US phone number recognizer
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;
console.log("Regular Expression example for US phone number: ", phone);

// Data type conversion
console.log();
console.log("##################### Example 6 #####################");
console.log();
const a = parseInt("16 Volts", 10); // Volts is ignored and 16 is parsed with base 10 which is default
const b = parseInt("3a", 16);   // parse hexadecimal 3a as the base used is 16 in 2nd argument
const c = parseFloat("15.5 Kph")    // Kph is ignored and 15.5 is parsed with base 10 for Floating numbers

console.log("Value of parseInt('16 Volts', 10): %d", a);
console.log("Value of parseInt('3a', 16): %d", b);
console.log("Value of parseFloat('15.5 Kph'): %d", c);

console.log();
console.log("##################### Example 7 #####################");
console.log();
let x = 2;
console.log("Current value of x: ", x);
let y = 3;
console.log("Current value of y: ", y);
let z;
z = x + 2; 
console.log("Value of z: ", z);
x = x++;
console.log("x++ value is: ", x);
x = ++x;
console.log("++x value is: ", x);

console.log();
console.log("##################### Example 8 #####################");
console.log();
let n = 0;

while(true) {
    n += 0.1;
    /* 
    If you try to run this program, you will be in for a rude surprise: instead of stopping
    at 0.3, this loop will skip right past it and execute forever. This is because 0.1 is a well-
    known value that can’t be expressed exactly as a double, as it falls between two binary
    fraction representations. So the third pass through this loop, n will have the value
    0.30000000000000004 , the test will be false , and the only chance to break the loop
    will have passed.
    You can rewrite this loop to use Number.EPSILON and a relational operator to make
    this comparison “softer” and successfully halt the loop:
    */
    // if(n === 0.3) break;
    if(Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);

console.log();
console.log("##################### Example 9 #####################");
console.log();
let v, v0;
v = v0 = 9.8;

const nums = [3, 5, 15, 7, 5];
let e, i=0;

while((e = nums[i]) < 10 && i++ < nums.length) {
    console.log(`Number less than 10: ${e}`);
}
console.log(`Number greater than 10: ${e}`);
console.log(`${nums.length - i - 1} numbers remain`);

console.log();
console.log("##################### Example 10 #####################");
console.log();
const roomTempC = 21.5;
let currentTempC = 19.5;
const message = `The current temperature is ` + 
    `${currentTempC - roomTempC}\u00b0C different than room temperature.`;
console.log(message);
const fahrenheit = `The current temperature is ${currentTempC * 9/5 +32}\u00b0F.`
console.log(fahrenheit);

console.log();
console.log("##################### Example 11 #####################");
console.log();
function sayHello() {
    console.log("Hello World!");
    console.log("¡Hola mundo!");
    console.log("Hallo wereld!");
    console.log("Привет мир!");
}
sayHello();