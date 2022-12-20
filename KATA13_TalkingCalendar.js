//Kata 13 - Talking Calendar
/*We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.*/

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const talkingCalendar = function (date) {
  const result = [];
  const Year = date.substring(0, 4);

  result.push(month[parseInt(date.substring(5, 7)) - 1]);

  if (date.substring(8) === "01") {
    result.push("1st,");
  } else if (date.substring(8) === "02") {
    result.push("2nd,");
  } else if (date.substring(8) === "03") {
    result.push("3rd,");
  } else {
    result.push(date.substring(8) + "th,");
  }

  result.push(Year);

  return result.join(" ");
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
