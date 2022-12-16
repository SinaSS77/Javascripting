
// KATA9 - camelCase Maker

const camelCase = function(input) {
  let result = [];
  let flag = true;
for(let i = 0 ; i < input.length ; i++){
  
  if(input[i] === " "){
    result.push(input[i+1].toUpperCase());
    flag = false;
  } else {
    if(flag == true){
      result.push(input[i]);
      
    } else {
      flag = true;
    }
  }
}
return result.join("");
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));