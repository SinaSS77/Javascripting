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