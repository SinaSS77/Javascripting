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