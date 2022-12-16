const repeatNumbers = (data) => {
  
  let resultArray = [];
  for (let i = 0; i < data.length; i++) {
    let container = "";
    let repeat = data[i][1];
    let value = data[i][0];
    for (let x = 0; x < repeat; x++) {
      container += value;
    }
    resultArray.push(container);
  }
return resultArray.join(", ");
};