
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