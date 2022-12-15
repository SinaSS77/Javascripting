
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
