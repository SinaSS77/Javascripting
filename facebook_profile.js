
/*
* QUIZ REQUIREMENTS
* - Your code should have an object `facebookProfile`
* - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
* - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
* - Carefully implement the desired functionality of each method, as decribed above
*/

// TIP -
// In an array,
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

let facebookProfile = {
 name: "Sina",
 friends: 3,
 messages: ["Hi", "Coding is wonderful"],
 postMessage: function (message) {
   facebookProfile.messages.push("message");
 },
 deleteMessage: function (index) {
   facebookProfile.messages.splice(index, 1);
 },
 addFriend: function () {
   facebookProfile.friends += 1;
 },
 removeFriend: function () {
   facebookProfile.friends -= 1;
 },
};