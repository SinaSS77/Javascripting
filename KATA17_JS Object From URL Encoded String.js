const urlDecode = function (text) {
  let trimedText = text.trim();

  // first i need to exchange %20 with space
  const re = /%20/gi; //RegExp : g= global and i = ignoreCase
  let spacedText = trimedText.replace(re, " ");

  // second I prefer to split the text by (&) into an array
  // we can simply use "String.split()" method:
  // let arrText = spacedText.split("&");
  // But let's try some looping!!
  let arrText = [];
  let first = 0;
  let second = 0;
  if (spacedText.includes("&")) {
    let flag = true; // I need to check if it is the first element
    for (let x = 0; x < spacedText.length; x++) {
      if (spacedText[x] === "&" && flag) {
        first = second;
        second = x;
        arrText.push(spacedText.substring(first, second));
        flag = false;
      } else if (spacedText[x] === "&" && flag === false) {
        first = second + 1;
        second = x;
        arrText.push(spacedText.substring(first, second));
      }
    }
    arrText.push(
      spacedText.substring(spacedText.lastIndexOf("&") + 1, spacedText.length)
    );
  } else {
    arrText.push(spacedText);
  }

  // now we have an array that we can ittertate on every elements
  result = {};
  for (let i = 0; i < arrText.length; i++) {
    for (let j = 0; j < arrText[i].length; j++) {
      let position = 0;
      if (arrText[i][j] === "=") {
        position = j;
        result[arrText[i].substring(0, j)] = arrText[i].substring(
          j + 1,
          arrText[i].length
        );
      }
    }
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
