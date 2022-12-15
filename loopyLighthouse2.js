
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
