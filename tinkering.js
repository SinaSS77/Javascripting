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

// even numbers
const isEven = function (number) {
  return number % 2 === 0;
};
const ten = isEven(10);
const eleven = isEven(11);

console.log(ten);
console.log(eleven);

// chooseStation chalange:
// Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

// In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = function (array) {
  let goodStation = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i][1] >= 20 &&
      (array[i][2] == "school" || array[i][2] == "community centre")
    ) {
      goodStation.push(array[i][0]);
    }
  }
  console.log(goodStation);
  return goodStation;
};

chooseStations(stations);

// finalPosition challenge
/* the center of a grid lines(x,y) is (0,0) {so for example a movement to the north is like doing this movement(0,1  or to the west is like (-1,0)).
now we want a function code thet if we implement it with passing this array :
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
to it , The finalPosition function should return the array:

[-1, 4]
*/

const finalPosition = function (moves) {
  let final = [0, 0];
  for (let item of moves) {
    if (item == "north") {
      final[1] += 1;
    } else if (item == "south") {
      final[1] -= 1;
    } else if (item == "east") {
      final[0] += 1;
    } else {
      final[0] -= 1;
    }
  }
  return final + "\n";
};

const moves = ["north", "north", "west", "west", "north", "east", "north"];

finalPosition(moves);
console.log(finalPosition(moves));

// an example of forEach() method
let words = ["cat", "in", "hat"];
words.forEach(function (element, index, all) {
  console.log("Word " + index + " in " + all.toString() + " is " + element);
});
console.log("\n");
// another example of forEach()
/* Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
*/
var test = [
  12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148,
  169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139,
];

test.forEach(function (element, index, all) {
  if (element % 3 === 0) {
    test[index] = element + 100;
  }
});
console.log(test + "\n");

// an example of map() method

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function (donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
console.log(improvedDonuts + "\n");

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [
  50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
  100.1, 6.77, 2.22,
];
var totalBills = bills.map(function (item) {
  item *= 1.15;
  item = item.toFixed(2);
  item = Number(item);
  return item;
});
console.log(totalBills);

/* The function takes 3 integer parameters: start, end, and step.
The function should return an array of numbers from start to end counting by step.
The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative
*/
function range(start, end, steps) {
  let begin = start;
  let rangeArray = [];
  if (
    start !== "Undefined" &&
    end !== "Undefined" &&
    steps !== "Undefined" &&
    start <= end &&
    steps > 0
  ) {
    while (begin <= end) {
      rangeArray.push(begin);
      begin += steps;
    }
  }
  return rangeArray;
}
console.log(range(3, 11, 2));

/* loopyLighthouse 2 challenge
Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.

range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples. */

function loopyLighthouse(range, multiples, words) {
  let result = [];

  if (
    Array.isArray(range) &&
    Array.isArray(multiples) &&
    Array.isArray(words) &&
    range.length === 2 &&
    multiples.length === 2 &&
    words.length === 2
  ) {
    for (let i = range[0]; i <= range[range.length - 1]; i++) {
      if (i % multiples[0] === 0 && i % multiples[1] === 0) {
        result.push(words.join(""));
      } else if (i % multiples[0] === 0) {
        result.push(words[0]);
      } else if (i % multiples[1] === 0) {
        result.push(words[1]);
      } else {
        result.push(i);
      }
    }
  }
  console.log(result);
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);



