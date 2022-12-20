// Kata 14 - Change Calculator
/*We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.
Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.
*/
const calculateChange = function (total, cash) {
  let cashBack = {};
  let change = cash - total;

  const dollarNames = ["twentyDollars", "tenDollars", "fiveDollars", "twoDollars", "oneDollar", "quarter", "dime", "nickel", "penny"];
  const dollarValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  let caseValue;

  for (let i = 0; i < dollarValues.length; i++) {
    caseValue = Math.floor(change / dollarValues[i]);
    if (caseValue > 0) {
      cashBack[dollarNames[i]] = caseValue;
      change = change % dollarValues[i];
    }
  }
  return cashBack;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));