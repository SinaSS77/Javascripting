
//// Array.Sort ascending

let ad = [45, 58, 64, 12, 78, 324, 54, 215, 24, 15, 85];
ad.sort(function (a, b) {
  return a - b;
});
console.log(ad);

/// descending
ad.sort(function (a, b) {
  return b - a;
});

/// finding the higest value

ad.sort(function (a, b) {
  return b - a;
});
let highest = ad[0];
console.log(highest);
