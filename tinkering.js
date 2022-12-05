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
  return stringLine + "\n";
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
  return word + "!" + "\n";
});

// greeting simple function
const sayhello = function (name){
  return "Hello, "+ name;
}

const greeting = sayhello("Mark");
console.log(greeting + "\n");

// even numbers
const isEven = function (number){
  return number % 2 === 0;
  }
const ten = isEven (10);
const eleven = isEven (11);

console.log(ten);
console.log(eleven);

// chooseStation chalange:
// Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

// In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (array) {
  let goodStation = [];
  for(let i = 0; i < array.length ; i++){
    
      if (array[i][1] >= 20 && (array[i][2] == "school" || array[i][2] == "community centre")){
        goodStation.push(array[i][0]);
      }
    
  }
  console.log(goodStation)
  return goodStation;
}

chooseStations(stations);

// finalPosition challenge
/* the center of a grid lines(x,y) is (0,0) {so for example a movement to the north is like doing this movement(0,1  or to the west is like (-1,0)).
now we want a function code thet if we implement it with passing this array :
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
to it , The finalPosition function should return the array:

[-1, 4]
*/

const finalPosition = function (moves){
  let final = [0,0];
  for (let item of moves){
    if ( item == "north"){
      final[1] += 1;
    } else if ( item == "south"){
      final[1] -= 1;
    } else if ( item == "east"){
      final[0] += 1 ;
    } else {
      final[0] -= 1 ;
    }
  }
  return final + "\n";
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

finalPosition(moves);
console.log(finalPosition(moves))