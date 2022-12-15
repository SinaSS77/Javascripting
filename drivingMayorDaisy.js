
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