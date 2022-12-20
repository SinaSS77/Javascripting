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

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */

// TIP -
// In an array,
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

let facebookProfile = {
  name: "Sina",
  friends: 3,
  messages: ["Hi", "Coding is wonderful"],
  postMessage: function (message) {
    facebookProfile.messages.push("message");
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends += 1;
  },
  removeFriend: function () {
    facebookProfile.friends -= 1;
  },
};

/* OBJECT and Function
Our function will receive two arguments:

The first argument, trash, is a string that will tell our function what type of item is being submitted.
The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.*/

function smartGarbage(trash, bins) {
  switch (trash) {
    case "waste":
      bins.waste += 1;
      break;
    case "recycling":
      bins.recycling += 1;
      break;
    case "compost":
      bins.compost += 1;
      break;
  }
  // return bins;
  console.log(bins.waste, bins.recycling, bins.compost);
}

smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 });

// Objects - Driving Mayor Daisy (Lighthouse labs challenge)
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35,
  },
];
const carPassing = function (cars, speedy) {
  let obj = { time: Date.now(), speed: speedy };
  cars.push(obj);
  return cars;
};

const speed = 38;

carPassing(cars, speed);
console.log(cars);

// We're rooting for you challenge

// const judgeVegetable = function (vegetables, metric) {
//   let checker = 0 ;
//   let flag = 0 ;
//   if ( metric === "redness"){
//     for (let i = 0 ; i < vegetables.length; i++){
//       if (vegetables[i].redness > checker){
//         checker = vegetables[i].redness;
//         flag = i;

//         return vegetables[flag].submitter;

//       }
//     }

//   }else if (metric === "plumpness"){
//     for (let i = 0 ; i < vegetables.length; i++){
//       if (vegetables[i].plumpness > checker){
//         checker = vegetables[i].plumpness;
//         flag = i;
//         return vegetables[flag].submitter;

//       }
//     }

//   }else{
//     console.log("Please provide a valid amount for metric!");
//   }

// };

const judgeVegetable = function (vegetables, metric) {
  let bestVeggie = vegetables[0];
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > bestVeggie[metric]) {
      bestVeggie = vegetables[i];
    }
  }
  return bestVeggie.submitter;
};

//// Array.Sort ascending

let ad = [45, 58, 64, 12, 78, 324, 54, 215, 24, 15, 85];
ad.sort(function (a, b) {
  return a - b;
});
console.log(ad);

/// descending
ad.sort(function (a, b) {
  return b - a;
});

/// finding the higest value

ad.sort(function (a, b) {
  return b - a;
});
let highest = ad[0];
console.log(highest);

/* IN THE HTML <img id='lhl-logo' src='https://cl.ly/2O3Y2w1R2j0v/Image%202016-07-20%20at%201.16.13%20PM.png' width='400' /> */

document.getElementById("lhl-logo").width = "200";
const fun = function () {
  document.getElementById("lhl-logo").width = "400";
};
setTimeout(fun, 1000);

// KATA1 - Sum the largest numbers

const sumLargestNumbers = function (array) {
  let result = [];
  let length = array.length;
  for (x = 0; x < length; x++) {
    let container = array[0];
    let position = 0;
    for (let i = 0; i < array.length; i++) {
      if (container <= array[i]) {
        container = array[i];
        position = i;
      }
    }
    result.push(container);
    array.splice(position, 1);
  }
  return result[1] + result[0];
};

console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// KATA2 - Conditional sums

const conditionalSum = (array, condition) => {
  let sum = 0;
  if (array.length > 0) {
    if (condition === "odd") {
      array.forEach((element) => {
        if (element % 2 !== 0) {
          sum += element;
        }
      });
    } else if (condition === "even") {
      array.forEach((element) => {
        if (element % 2 === 0) {
          sum += element;
        }
      });
    } else {
      sum = 'please check the condition! must be either "odd" or "even"';
    }
  }

  return sum;
};
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// KATA3 - number of vowels in a sentence

const numberOfVowels = (data) => {
  let vowelsInData = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let item of vowels) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === item) {
        vowelsInData++;
      }
    }
  }
  return vowelsInData;
};
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels(2));

// KATA4 - instructorWithLongestName
// we will be given a list of instructors and have to determine which instructor has the longest name
// with for method

const instructorWithLongestName = instructors => {
  let nameLength = instructors[0].name.length;
  let index = 0;
 for (let i = 0 ; i < instructors.length ; i++){
  if ( instructors[i].name.length > nameLength){
    nameLength = instructors[i].name.length
    index = i;
  }
 }
 return instructors[index];
}

// with foreach method
const instructorWithLongestName2 = instructors => {
  let nameLength = instructors[0].name.length;
  let ind = 0;
instructors.forEach((element, index) => {
 if(element.name.length > nameLength){
  nameLength = element.name.length;
  ind = index;
 }
});
 return instructors[ind];
}


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

// KATA5 - Percent Encoding
/*we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.*/
// !!!!!!! Use some sort of looping. Do Not use String.prototype.replace !!!!!

const urlEncode = text => {
  text = text.trim();
  let textArray = [];
  for ( let i = 0 ; i < text.length ; i++){
    textArray.push(text[i]);
  }
  for ( let j = 0 ; j < textArray.length ; j++){
    if (textArray[j] === " "){
      textArray[j] = "%20";
    }
  }
  return textArray.join("");
  
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// KATA6 - SmartParking
/*We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.*/

const whereCanIPark = function (spots, vehicle) {
  let spot = [0, 0];
  
   
    switch (vehicle) {
      case "regular":
        for (let i = 0; i < spots.length; i++) {
          for (let j = 0; j < spots[i].length; j++) {
            if (spots[i][j] === "R") {
              spot = [j, i];
              break;
            }
          }
        }
        break;

      case "small":
        for (let i = 0; i < spots.length; i++) {
          for (let j = 0; j < spots[i].length; j++) {
            if (spots[i][j] === "R" || spots[i][j] === "S") {
              spot = [j, i];
              break;
            }
          }
        }
        break;

      case "motorcycle":
        for (let i = 0; i < spots.length; i++) {
          for (let j = 0; j < spots[i].length; j++) {
            if (
              spots[i][j] === "R" ||
              spots[i][j] === "S" ||
              spots[i][j] === "M"
            ) {
              spot = [j, i];
              break;
            }
          }
        }
        break;
    }

    if (spot[0] === 0 && spot[1] === 0){
      return false;
    }else {
      return spot;
    }
  
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);


// KATA7 - In the Air Tonight
const checkAir = (samples, threshold) => {
  let allInputData = samples.length;
  let dirty = 0;
  for (const item of samples) {
    if (item === "dirty"){
      dirty ++;
    }
  }
  if (((dirty/allInputData) < threshold )){
    return "clean"  ;
  } else {
    return "polluted" ;
  }
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));

//KATA8 - Repeating Numbers
/* The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:

[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat that value */
const repeatNumbers = (data) => {
  
  let resultArray = [];
  for (let i = 0; i < data.length; i++) {
    let container = "";
    let repeat = data[i][1];
    let value = data[i][0];
    for (let x = 0; x < repeat; x++) {
      container += value;
    }
    resultArray.push(container);
  }
return resultArray.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);


// KATA9 - camelCase Maker

const camelCase = function(input) {
  let result = [];
  let flag = true;
for(let i = 0 ; i < input.length ; i++){
  
  if(input[i] === " "){
    result.push(input[i+1].toUpperCase());
    flag = false;
  } else {
    if(flag == true){
      result.push(input[i]);
      
    } else {
      flag = true;
    }
  }
}
return result.join("");
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// KATA10 - Multiplication Table
/*We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.*/
const multiplicationTable = (maxValue) => {
  let result = "";
  const startPoint = 1;

  for (let i = startPoint; i <= maxValue; i++) {
    for (let j = startPoint; j <= maxValue; j++) {
      result += i * j + " ";
    }
    result += "\n";
  }
  return result;
};
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

//KATA11 - Bouncy Castles
/* In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth.
The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction. */
// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  const spVolume = (4 * PI * (Math.pow(radius, 3))) / 3 ; 
  return spVolume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  const coVolume = (PI * height * (Math.pow(radius, 2))) / 3 ;
  return coVolume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  const prVolume = height * width * depth;
  return prVolume;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let totVolume = 0 ;
  solids.forEach(element => {
    
  
    switch (element.type) {
      case "sphere":
        totVolume += sphereVolume(element.radius);
        break;
      case "cone":
        totVolume += coneVolume(element.radius, element.height);
        break;
      case "prism":
        totVolume += prismVolume(element.height, element.width, element.depth);
        break;    
    }
  });
    return totVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

// KATA12 - The Great Codeville Bake-off
/* We need to complete a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array) */
const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let recipesName = "No mached recipes were found in the book!";

  for (let i = 0; i < recipes.length; i++) {
    const firstIngredients = recipes[i].ingredients[0];
    const secondIngredients = recipes[i].ingredients[1];
    if (
      (bakeryA.includes(firstIngredients) &&
      bakeryB.includes(secondIngredients)) ||
      (bakeryB.includes(firstIngredients) &&
      bakeryA.includes(secondIngredients))
    ) {
      recipesName = recipes[i].name;
    }
  }
  return recipesName;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));


bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

