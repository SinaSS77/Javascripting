
// We're rooting for you challenge

// const judgeVegetable = function (vegetables, metric) {
//   let checker = 0 ;
//   let flag = 0 ;
//   if ( metric === "redness"){
//     for (let i = 0 ; i < vegetables.length; i++){
//       if (vegetables[i].redness > checker){
//         checker = vegetables[i].redness;
//         flag = i;

//         return vegetables[flag].submitter;

//       }
//     }

//   }else if (metric === "plumpness"){
//     for (let i = 0 ; i < vegetables.length; i++){
//       if (vegetables[i].plumpness > checker){
//         checker = vegetables[i].plumpness;
//         flag = i;
//         return vegetables[flag].submitter;

//       }
//     }

//   }else{
//     console.log("Please provide a valid amount for metric!");
//   }

// };

const judgeVegetable = function (vegetables, metric) {
  let bestVeggie = vegetables[0];
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > bestVeggie[metric]) {
      bestVeggie = vegetables[i];
    }
  }
  return bestVeggie.submitter;
};