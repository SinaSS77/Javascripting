const checkAir = (samples, threshold) => {
  let allInputData = samples.length;
  let dirty = 0;
  for (const item of samples) {
    if (item === "dirty"){
      dirty ++;
    }
  }
  if (((dirty/allInputData) < threshold )){
    return "clean"  ;
  } else {
    return "polluted" ;
  }
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));