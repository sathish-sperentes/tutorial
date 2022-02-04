const { compose } = require("underscore");

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

function getGreeting() {
    return "Hello World!";
}
console.log(getGreeting());

function avg(a, b) {
    return (a+b)/2;
}
console.log(avg(3, 6));

function getSentence ({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}
const o = {
    subject: "I",
    verb: "Love",
    object: "Javascript",
};
console.log(getSentence(o));

// ES6 Arrow Notation examples
/* 
const f1 = function() { return "hello!"; }
// OR
const f1 = () => "hello!";

const f2 = function(name) { return `Hello, ${name}!`; }
// OR
const f2 = name => `Hello, ${name}!`;

const f3 = function(a, b) { return a + b; }
// OR
const f3 = (a,b) => a + b;
*/

const back = {
    name: 'Julie',
    greetBackwards: function() {
        // ES6 Arrow Notation => used for assigning function to a variable as an object
        const getReverseName = () => {
            let nameBackwards = '';
            for(let i=this.name.length-1; i>=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
console.log(back.greetBackwards());

const bruce = { name: 'Brue' };
const madeline = { name: 'Madeline' };
// this function is not associated with any object, yet it's using 'this'!
function greet() {
    return `Hello, I'm ${this.name}!`;
    
}
console.log(greet());   // "Hello, I'm !" - 'this' not bound
console.log(greet.call(bruce));   // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
console.log(greet.call(madeline));   // "Hello, I'm Bruce!" - 'this' bound to 'madeline'

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;

    return `Hello, I'm ${this.name} born in ${this.birthYear} working as a ${this.occupation}!`;
}
update.call(bruce, 1949, 'singer');
// bruce is now { name: "Bruce", birthYear: 1949, occupation: "singer" }
update.call(madeline, 1962, 'actress');
// madeline is now { name: "Madeline", birthYear: 1962, occupation: "actress" }

update.apply(bruce, [1955, "actor"]);
// bruce is now { name: "Bruce", birthYear: 1955, occupation: "actor" }
update.apply(madeline, [1918, "writer"]);
// madeline is now { name: "Madeline", birthYear: 1918, occupation: "writer" }

// There’s one final function that allows you to specify the value for 'this' : bind. bind
// allows you to permanently associate a value for 'this' with a function
const updateBruce = update.bind(bruce);
updateBruce(1904, "actor");
// bruce is now { name: "Bruce", birthYear: 1904, occupation: "actor" }
updateBruce.call(madeline, 1274, "king");
// bruce is now { name: "Bruce", birthYear: 1274, occupation: "king" };
// madeline is unchanged

// Scope in Javascript
// Lexical Scope
console.log('Lexical Scope in Javascript')
function f1() {
    console.log('one');
}
function f2() {
    console.log('two');
}
console.log(f2());
console.log(f1());
console.log(f2());

// Global Scope
console.log('Global Scope in Javascript')
/*
let user = {
    name = 'Irena',     // Throwing "SyntaxError: Invalid shorthand property initializer"
    age = 25,
};
    
function greet(user) {
    console.log(`Hello, ${user.name}!`);    // Throwing "TypeError: Cannot read properties of undefined (reading 'name')"
}
function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}
*/

// Block Scope
console.log('Block Scope in Javascript');
console.log('before block');
{
    console.log('inside block');
    const x = 3;
    console.log(x);     // logs 3
}
console.log(`outside block; x=${x}`);   // ReferenceError: x is not defined

// Variable Masking in Javascript
console.log('Varibale Masing in Javascript')
{
    // outer block
    let x = { color: "blue" };
    let y = x;                  // y and x refer to the same object
    let z = 3;
    {
        // inner block
        let x = 5;              // outer x now masked
        console.log(`Inner block variable x value is ${x}`);         // logs 5
        console.log(`Inner block variable y value is ${y.color}`);   // logs "blue"; object pointed to by y (and x in the outer scope) is still in scope
        y.color = "red";
        console.log(`Inner block variable z value is ${z}`);         // logs 3; z has not been masked
        console.log('Exiting Inner Block');
    }
    console.log();
    console.log('Starting Outer Block....')
    console.log(`Outer block variable x value is ${x.color}`);       // logs "red"; object modified in inner scope
    console.log(`Outer block variable y value is ${y.color}`);       // logs "red"; x and y point to the same object
    console.log(`Outer block variable z value is ${z}`);             // logs 3
}

// Define Global Function
console.log();
console.log('Defining Global Functions');
let globalFunc;                     // undefined global function
{
    let blockVar = 'a';             // block-scoped variable
    globalFunc = function() {
        console.log(blockVar);
    }
}
console.log("globalFunc is a Global Function which has access to its Block variable 'a' as printed below when invoked")
globalFunc();           // logs "a"

// Immediately Invoked Function Expressions aka 'IIFE'
console.log();
console.log("Immediately Invoked Function Expressions aka 'IIFE'");
const secMessage = (function () {
    const secret = "I'm a secret!";
    return `The secret is ${secret.length} characters long.`
})();
console.log(secMessage);

console.log();
console.log("Use Case of IIFE:");
console.log("Consider a function that can report the number of times it’s been called in a way that can’t be tampered with");
const f = (function() {
    let count = 0;
    return function() {
        return `I have been called ${++count} time(s).`;
    }
})();
console.log(f()); // "I have been called 1 time(s)."
console.log(f()); // "I have been called 2 time(s)."

console.log();
console.log("##################### Example 12 #####################");
console.log();

// Arrays

console.log("Array methods:");
const arr2 = ["b", "c", "d"];
console.log(`Array: ${arr2}`);
console.log();
arr2.push("e");
console.log(`arr.push("e") method adds "e" to the end`);
console.log(`New Array elements: ${arr2}`);
console.log();
arr2.pop();
console.log(`arr.pop() removes "e" from the end`);
console.log(`After pop() method, array elements are: ${arr2}`);
console.log("push() & pop() are used to add/remove elements from end of an Array");
console.log();
arr2.unshift("a");
console.log(`arr.unshift("a") method adds "a" to the beginning`);
console.log(`After unshift method, array elements are: ${arr2}`);
console.log();
arr2.shift();
console.log(`arr.shift() method removes "a" from the beginning`);
console.log(`After arr.shift method, array elements are: ${arr2}`);
console.log("unshift() & shift() are used to add/remove elements from the beginning of an Array");
console.log();

console.log("Adding multiple elements in an Array:");
console.log("Let's concat arr(4,5,6) to existing Array");
arr2.concat[4, 5, 6];
console.log(`New concatenated Array: ${arr2}`);

temparr = [1, 2, 3, 4, 5, 6];
console.log(`Temparr Array elements: ${temparr}`);
console.log(`Let's concat (12, 14, 16)`)
temparr.concat([12, 14, 16]);
console.log(temparr);
console.log(`Let's slice to create a subarray beginning at index 3`);
temparr.slice(3);
console.log(temparr);
console.log(`Let's do inplace modification instead of creating a subarray`);
console.log(`Add ("a", "b", "c") elements inplace`);
temparr.splice("a", "b", "c");
console.log(temparr);
console.log(`ES6 copyWithin() method does inplace modification`)
temparr.copyWithin(2, 0, 2);
console.log(temparr);

const arr3 = new Array(5).fill(1);
console.log(`New Array filled with 'new Array(5).fill(1) method`);
console.log(`New Array elements: ${arr3}`);
arr3.fill(5.5, -3);
console.log(`Negative indices can be used too`);
console.log(`fill(5.5, -3) in the Array: ${arr3}`);

const arr4 = [1, 2, 3, 4, 5];
console.log(`Current Array: ${arr4}`);
console.log(`Reverse array using 'reverse()' method: ${arr4.reverse()}`);

const arr5 = [
    {name: "Suzanne"},
    {name: "Jim"},
    {name: "Trevor"},
    {name: "Amanda"},
];
console.log(`Array sort on objects: ${arr5}`);
console.log(`After sorting alphabetically using name property: ${arr5.sort((a, b) => a.name > b.name)}`);

// indexOf() Array Method to find the index of an element in an Array
const oth = { name: "Jerry" };
const arr6 = [1, 5, "a", oth, true, 5, [1, 2], "9"];
console.log(`Array elements are: ${arr6}`);
console.log(`Find index of 5 using indexOf() method: Index of 5 is => ${arr6.indexOf(5)}`);
console.log(`Find Last Index of "a" using lastIndexOf() method: Last Index of "a" is => ${arr6.lastIndexOf("a")}`);
console.log(`Find index of "Jerry" using indexOf() method: Index of "Jerry" is => ${arr6.indexOf({ name: "Jerry" })}`);

// find() method to find index of an element in Array
const arr7 = [
    { id: 5, name: "Judith" }, 
    { id: 7, name: "Francis" }
];

// console.log(`New Array is: ${arr7}`);
console.log(JSON.stringify(arr7));
console.table(arr7);
console.log(arr7.find(o => o.id === 5));

const arr8 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arr8.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));

// some() method returns true if it finds an element that meets the criteria (all it needs is one;
// it’ll stop looking after it finds the first one), and false otherwise
console.log("some() method returns true when it finds the first matching criteria");
console.log(arr8.some(x => x%2===0));

// every returns true if every element in the array passes the criteria, and false other‐
// wise. every will stop looking and return false if it finds an element that doesn’t
// match the criteria; otherwise, it will have to scan the entire array
console.log("every() method returns true if every element in the array passes the criteria");
arr10 = [4, 6, 16, 36];
console.log(`New Array: ${arr10}`);
console.log("Check if every element is divisible by 2");
console.log(arr10.every(x => x%2===0));
console.log("Check if every element is a square root of itself");
console.log(arr10.every(x => Number.isInteger(Math.sqrt(x))));

// Consider the following equivalent techniques for searching for a Person object by ID
class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
    juliet = new Person("Juliet"),
    peter = new Person("Peter"),
    jay = new Person("Jay");
const arr9 = [jamie, juliet, peter, jay];

// option 1: direct comparison of ID
console.log(`option 1: direct comparison of ID: ${JSON.stringify(arr9.find(p => p.id === juliet.id))}`);

// map() & filter() methods in Array
console.log();
console.log("map() & filter() methods:")
const cart = [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
console.log(JSON.stringify(cart));
console.table(cart);
const names = cart.map(x => x.name);
console.log(`The name of the elements are: ${names}`);
const prices = cart.map(x => x.price);
console.log(`The prices are: ${prices}`);
const discountPrices = prices.map(x => x*0.8);
console.log(`80% discount price is: ${discountPrices}`);
console.log(`Convert to Lower Case: ${names.map(str => str.toLowerCase())}`);
//const result = names.map(str => str.toLowerCase());
//console.log(result);
console.log();
console.log("Combine elements from 2 different arrays: ");
console.log(`we’re using not just the element itself ( x ), but its index ( i ).
We need the index because we want to correlate elements in items with elements
in prices according to their index`);
const items = ["Laptop", "Mobile"];
console.log(`Array 1 (Items): ${items}`);
const cost = [109.95, 69.69];
console.log(`Array 2 (Cost): ${cost}`);
const shop = items.map((x, i) => ({name: x, price: cost[i]}));
console.log(`Combined Array (Cart): ${JSON.stringify(shop)}`);
console.table(shop);
console.log();

// filter() method is used to remove elements from an Array
// create a deck of playing cards
const cards = [];
for(let suit of ['H', 'c', 'D', 'S'])  // Heart, Club, Diamond, Spade
    for(let value=1; value<=13; value++)
        cards.push({ suit, value });
// console.log(JSON.stringify(cards));
console.table(cards);
// get all cards with value 2
console.log(`Get all cards with value = 2: ${JSON.stringify(cards.filter(c => c.value === 2))}`);
console.log();
// get all diamonds
const diamondsOnly = () => cards.filter(c => c.suit === 'D');
console.log(`Get all Diamonds: ${JSON.stringify(diamondsOnly())}`);
console.log();
// get all face cards
const allFaceCards = () => cards.filter(c => c.value > 10);
console.log(`Get all Face Cards: ${JSON.stringify(allFaceCards())}`);
console.log();
// get all face cards that is Heart 'H'
const heartFaceCards = () => cards.filter(c => c.value > 10 && c.suit === 'H');
console.log(`Get all Heart Face Cards: ${JSON.stringify(heartFaceCards())}`);
console.log();

// we want to create short string representation of the cards in our
// deck. We’ll use the Unicode code points for the suits, and we’ll use “A,” “J,” “Q,” and
// “Q” for ace and the face cards
/* Cards Unicode charcters
♠	Black Spade	&#9824;
♥	Black Heart	&#9829;
♣	Black Club	&#9827;
♦	Black Diamond	&#9830;
♤	White Spade	&#9828;
♡	White Heart	&#9825;
♧	White Club	&#9831;
♢	White Diamond	&#9826;
*/
function cardToString(c) {
    const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
    const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };

    // constructing values each time we call cardToString is not very
    // efficient; a better solution is a reader's exercise
    for(let i=2; i<=10; i++) values[i] = i;
    return values[c.value] + suits[c.suit];
}
// console.log(`Unicode Characters for Cards: ${JSON.stringify(cardToString())}`);
// get all cards with value 2
const val = () => cards.filter(c => c.value === 2).map(cardToString);
console.log(`Cards with value 2: ${JSON.stringify(val())}`);
console.log();
// get all face cards that is Heart 'H'
const heartOnly = () => cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString);
console.log(`Face Cards for Heart ${'\u2665'}: ${JSON.stringify(heartOnly())}`);
console.log();
// get all face cards that is Diamond 'D'
const diamondOnly = () => cards.filter(c => c.value > 10 && c.suit === 'D').map(cardToString);
console.log(`Face Cards for Diamond ${'\u2666'}: ${JSON.stringify(diamondOnly())}`);
console.log();
// get all face cards that is Spade 'S'
const spadeOnly = () => cards.filter(c => c.value > 10 && c.suit === 'S').map(cardToString);
console.log(`Face Cards for Spade ${'\u2660'}: ${JSON.stringify(spadeOnly())}`);
console.log();
// get all face cards that is Club 'C'
// This section doesn't print C values and not sure WHY???????
const clubOnly = () => cards.filter(c => c.value > 10 && c.suit === 'C').map(cardToString);
console.log(`Face Cards for Club ${'\u2663'}: ${JSON.stringify(clubOnly())}`);
console.log("Not sure why this doesn't print 'C'.....");
console.log();

// reduce() method in Array
const reduceArray = [5, 7, 2, 4];
console.log(`Array on which reduce() method is performed: ${reduceArray}`);
const sum = reduceArray.reduce((a, x) => a += x, 0);
console.log(`Sum the numbers in the Array: ${sum}`);
console.log();

// if you have an array of strings, and you want to group the strings into
// alphabetic arrays (A words, B words, etc.), you can use an object:
const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", 
"November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
console.log(`New Array: ${words}`);
const alphabetical = words.reduce((a, x) => {
    if(!a[x[0]]) a[x[0]] = [];
        a[x[0]].push(x);
        return a;}, {});
console.log(`Aplhabetical Words: ${JSON.stringify(alphabetical)}`);
const longWords = words.reduce((a, w) => w.length>6 ? a+" "+w : a, "").trim();
console.log("a string accumulator to get a single string containing all words longer than six letters");
console.log(`Statement created with words longer than 6 letters: `)
console.log(`${JSON.stringify(longWords)}`);
console.log();

// reduce() method in statistics
const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
console.log(`Statistics data: ${data}`);
// Donald Knuth's algorithm for calculating variance:
// Art of Computer Programming, Vol. 2: Seminumerical Algorithms, 3rd Ed., 1998
const stats = data.reduce((a, x) => {
    a.N++;
    let delta = x - a.mean;
    a.mean += delta/a.N;
    a.M2 += delta*(x - a.mean);
    return a;
}, { N: 0, mean: 0, M2: 0 });
if(stats.N > 2) {
    stats.variance = stats.M2 / (stats.N - 1);
    stats.stdev = Math.sqrt(stats.variance);
}
console.log(`Variance in the data: ${JSON.stringify(stats)}`);
console.log();

// join() method in Array
const joinArr = [1, null, "hello", "world", true, undefined];
console.log(`New Array: ${joinArr}`);
console.log(`Delete an element with delete() method: ${delete joinArr[3]}`);
console.log(`Join Array with no arguments 'join()': ${joinArr.join()}`);
console.log(`Join Array with 'join('')': ${joinArr.join('')}`);
console.log(`Join Array with'join(' -- ')': ${joinArr.join(' -- ')}`);
console.log();

// Object Oriented Programming in Javascript
