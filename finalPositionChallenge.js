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
