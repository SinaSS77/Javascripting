
// KATA4 - instructorWithLongestName
// we will be given a list of instructors and have to determine which instructor has the longest name
// with for method

const instructorWithLongestName = instructors => {
  let nameLength = instructors[0].name.length;
  let index = 0;
 for (let i = 0 ; i < instructors.length ; i++){
  if ( instructors[i].name.length > nameLength){
    nameLength = instructors[i].name.length
    index = i;
  }
 }
 return instructors[index];
}

// with foreach method
const instructorWithLongestName2 = instructors => {
  let nameLength = instructors[0].name.length;
  let ind = 0;
instructors.forEach((element, index) => {
 if(element.name.length > nameLength){
  nameLength = element.name.length;
  ind = index;
 }
});
 return instructors[ind];
}


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));