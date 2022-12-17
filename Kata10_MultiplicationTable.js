
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