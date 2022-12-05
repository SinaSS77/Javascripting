const amounts = [61.0, 52.25, 112.99, 5.0];
let total = 0;

for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}

console.log(total);

// Second way and new one:
let overall = 0;
for (let item of amounts) {
  overall += item;
}
console.log(overall);

// a function to revarse things. for example a name.

let name = "";
function revarseMe(thing) {
  for (let i = thing.length - 1; i >= 0; i--) {
    name += thing[i];
  }
  console.log(name);
}
revarseMe("Julia");

// write a function to reitarate a string (num) times!
function laugh1(num) {
  let word = "";
  for (let x = 0; x < num; x++) {
    word += "ha";
  }
  return word;
}
console.log(laugh1(10));

// ***** or *****:
const laugh2 = (num) => "ha".repeat(num) + "!";

console.log(laugh2(10));

// make a triangle of asterisks:

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(num) {
  let stringLine = "";
  for (let i = 1; i <= num; i++) {
    stringLine = stringLine + makeLine(i);
  }
  return stringLine;
}

console.log(buildTriangle(10));

// a callback function

let catSays = function (num) {
  let sound = "";
  for (let y = 1; y <= num; y++) {
    sound += "Meow, ";
  }
  return sound;
};

function catCall(callbackFunction) {
  return "Hello " + callbackFunction(3);
}

console.log(catCall(catSays));

// an example of an inline function expression

function movies(messageFunction, name) {
  messageFunction(name);
}
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

// a Function experession

let cry = function crying() {
  let sound = "boohoo!";
  return sound;
};

console.log(cry())

// another inline function example
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num){
  let word = "";
  for (let i = 1 ; i <=num ; i++){
      word += "ha";
  }
  return word + "!";
});