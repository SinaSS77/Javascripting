
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
