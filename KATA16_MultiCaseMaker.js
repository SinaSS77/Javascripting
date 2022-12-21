const makeCase = function (input, style) {
  result = [];
  let vowels = ["a", "i", "e", "o", "u"];
  let caseStyle = "";
  // to check if the style is a array?
  if (Array.isArray(style)) {
    caseStyle = style[1];
  } else {
    caseStyle = style;
  }
  // define a flage to use for some cases
  let flag = true;

    // define a function to check whether the style is an array or not. should we use upperCase or lowerCase
    const checkCase = (array) => {
      if (Array.isArray(style)) {
        if (style[0] === "upper") {
          return result.join("").toUpperCase();
        } else if (style[0] === "lower") {
          return result.join("").toLowerCase();
        } else {
          return result.join("");
        }
      } else {
        return result.join("");
      }
    };

    // using a switch case for different cases

  switch (caseStyle) {
    // to change input to camelCase:
    case "camel":
      for (let i = 0; i < input.length; i++) {
        if (flag) {
          if (input[i] === " ") {
            result.push(input[i + 1].toUpperCase());
            flag = false;
          } else {
            result.push(input[i]);
            flag = true;
          }
        } else {
          flag = true;
        }
      }
      return checkCase(result);

    // to change input to pascal:
    case "pascal":
      result.push(input[0].toUpperCase());
      for (let i = 1; i < input.length; i++) {
        if (flag) {
          if (input[i] === " ") {
            result.push(input[i + 1].toUpperCase());
            flag = false;
          } else {
            result.push(input[i]);
            flag = true;
          }
        } else {
          flag = true;
        }
      }
      return checkCase(result);

    // to change input to snake:
    case "snake":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result.push("_");
        } else {
          result.push(input[i]);
        }
      }
      return checkCase(result);

    // to change input to kebab:
    case "kebab":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result.push("-");
        } else {
          result.push(input[i]);
        }
      }
      return checkCase(result);

    // to change input to title:
    case "title":
      result.push(input[0].toUpperCase());
      for (let i = 1; i < input.length; i++) {
        if (flag) {
          if (input[i] === " ") {
            result.push(" ");
            result.push(input[i + 1].toUpperCase());
            flag = false;
          } else {
            result.push(input[i]);
            flag = true;
          }
        } else {
          flag = true;
        }
      }
      return checkCase(result);

    // to change input to vowel:
    case "vowel":
      for (let i = 0; i < input.length; i++) {
        if (vowels.includes(input[i])) {
          result.push(input[i].toUpperCase());
        } else {
          result.push(input[i]);
        }
      }
      return checkCase(result);

    // to change input to consonant:
    case "consonant":
      for (let i = 0; i < input.length; i++) {
        if (vowels.includes(input[i])) {
          result.push(input[i]);
        } else {
          result.push(input[i].toUpperCase());
        }
      }
      return checkCase(result);
  }


};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
