// KATA5 - Percent Encoding
/*we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.*/
// !!!!!!! Use some sort of looping. Do Not use String.prototype.replace !!!!!

const urlEncode = text => {
  text = text.trim();
  let textArray = [];
  for ( let i = 0 ; i < text.length ; i++){
    textArray.push(text[i]);
  }
  for ( let j = 0 ; j < textArray.length ; j++){
    if (textArray[j] === " "){
      textArray[j] = "%20";
    }
  }
  return textArray.join("");
  
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));