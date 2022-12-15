
/*
* Programming Quiz: I Got Bills (6-9)
*
* Use the .map() method to take the bills array below and create a second array
* of numbers called totals. The totals array should contains each amount from the
* bills array but with a 15% tip added. Log the totals array to the console.
*
* For example, the first two entries in the totals array would be:
*
* [57.76, 21.99, ... ]
*
* Things to note:
*  - each entry in the totals array must be a number
*  - each number must have an accuracy of two decimal points
*/

var bills = [
 50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
 100.1, 6.77, 2.22,
];
var totalBills = bills.map(function (item) {
 item *= 1.15;
 item = item.toFixed(2);
 item = Number(item);
 return item;
});
console.log(totalBills);