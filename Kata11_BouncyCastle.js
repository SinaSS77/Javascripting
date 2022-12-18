
// KATA10 - Multiplication Table
/*We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.*/

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
