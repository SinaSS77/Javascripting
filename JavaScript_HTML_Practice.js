const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let recipesName = "No mached recipes were found in the book!";

  for (let i = 0; i < recipes.length; i++) {
    const firstIngredients = recipes[i].ingredients[0];
    const secondIngredients = recipes[i].ingredients[1];
    if (
      (bakeryA.includes(firstIngredients) &&
        bakeryB.includes(secondIngredients)) ||
      (bakeryB.includes(firstIngredients) &&
        bakeryA.includes(secondIngredients))
    ) {
      recipesName = recipes[i].name;
    }
  }
  return recipesName;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
