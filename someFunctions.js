// a callback function

let catSays = function (num) {
  let sound = "";
  for (let y = 1; y <= num; y++) {
    sound += "Meow, ";
  }
  return sound;
};

function catCall(callbackFunction) {
  return "Hello " + callbackFunction(3) + "\n";
}

console.log(catCall(catSays));

// an example of an inline function expression

function movies(messageFunction, name) {
  messageFunction(name);
}
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo" + "\n");

// a Function experession

let cry = function crying() {
  let sound = "boohoo!";
  return sound + "\n";
};

console.log(cry());

// another inline function example
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
  let word = "";
  for (let i = 1; i <= num; i++) {
    word += "ha";
  }
  return word + "!" + "\n";
});

// greeting simple function
const sayhello = function (name) {
  return "Hello, " + name;
};

const greeting = sayhello("Mark");
console.log(greeting + "\n");