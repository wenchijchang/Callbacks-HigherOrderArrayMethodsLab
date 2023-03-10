// <<<<<<<<<<<<<<<<< DATA SET <<<<<<<<<<<<<<<<<
let dishes = [
  {
    id: 1,
    name: "Pizza",
    cuisine: "Italian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 2,
    name: "Spaghetti",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 3,
    name: "Ravioli",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 4,
    name: "Enchiladas",
    cuisine: "Mexican",
    servings: 6,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 5,
    name: "Tacos",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 6,
    name: "Burrito Supreme",
    cuisine: "Mexican",
    servings: 1,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 7,
    name: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
  },
  {
    id: 8,
    name: "Crepes",
    cuisine: "French",
    servings: 1,
    ingredients: ["flour", "sugar"],
  },
  {
    id: 9,
    name: "Corned Beef & Cabbage",
    cuisine: "Irish",
    servings: 10,
    ingredients: ["beef", "cabbage"],
  },
  {
    id: 10,
    name: "Beef Stew",
    cuisine: "Irish",
    servings: 8,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 11,
    name: "Lasagna",
    cuisine: "Vegetarian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 12,
    name: "Falafel",
    cuisine: "Vegetarian",
    servings: 1,
    ingredients: ["chickpea", "parsley"],
  },
  {
    id: 13,
    name: "Chili",
    cuisine: "Vegetarian",
    servings: 13,
    ingredients: ["tomato", "chickpea"],
  },
  {
    id: 14,
    name: "Goulash",
    cuisine: "Hungarian",
    servings: 15,
    ingredients: ["beef", "tomato"],
  },
];

// <<<<<<<<<<<<<<<<< EXAMPLE FUNCTION <<<<<<<<<<<<<<<<<

// function findMexicanFood() {
//   let results = dishes.filter(function (el) {
//     if (el.cuisine === "Mexican") {
//       return true;
//     } else {
//       return false;
//     }
//   });

//Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

//   return results;
// }

// let mexicanFood = findMexicanFood();
// console.log("Mexican Foods: ", mexicanFood);

// <<<<<<<<<<<<<<<<< PROBLEMS <<<<<<<<<<<<<<<<<

//1. Create a function that will return all dishes with the cuisine type of "Vegetarian"
//Filter

function findVegetarian(dish) {
  if (dish.cuisine === "Vegetarian") {
    return true;
  }
}
let filterVegetarian = dishes.filter(findVegetarian);
console.log("Number 1 result: ", filterVegetarian);

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function findItalianServeMoreThanFive(dish) {
  if (dish.cuisine === "Italian" && dish.servings >= 5) {
    return true;
  }
}

let filterItalianServeMoreThanFive = dishes.filter(
  findItalianServeMoreThanFive
);
console.log("Number 2 result: ", filterItalianServeMoreThanFive);

//3. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function findIDIsServing(dish) {
  if (dish.id === dish.servings) {
    return true;
  }
}
let filterIdIsServing = dishes.filter(findIDIsServing);
console.log("Number 3 result: ", filterIdIsServing);

//4. Create a function that will return only dishes whose serving count is even.
//Filter

function findEvenServing(dish) {
  if (dish.servings % 2 === 0) {
    return true;
  }
}
let filterEvenServing = dishes.filter(findEvenServing);
console.log("Number 4 result: ", filterEvenServing);

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter

function findTomatoAndCheese(dishes) {
  let foundDishes = dishes.filter((dish) => {
    if (
      dish.ingredients.includes("cheese") &&
      dish.ingredients.includes("tomato")
    ) {
      return true;
    }
  });
  return foundDishes;
}

function displayJustName(dishes) {
  let result = dishes.map((dish) => {
    return dish.name;
  });
  return result;
}
let problemFive = findTomatoAndCheese(dishes);
console.log("Results of NUMBER 5", problemFive);
let problemFiveMapped = displayJustName(problemFive);
console.log("MAPPED RESULTS OF NUMBER 5", problemFiveMapped);

//6. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map

function displayName(dishes){
  let result = dishes.map((dish) => {
    return dish.cuisine;
  });
  return result;
}
let problemSixMapped = displayName(dishes);
console.log("Number 6 result: ", problemSixMapped);


//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map

function displayCuisineTypeAndDishName(dishes){
  let result = dishes.map((dish) => {
	return dish.cuisine + " " + dish.name;
});
  return result;
}
let problemSevenMapped = displayCuisineTypeAndDishName(dishes);
console.log("Number 7 result: ", problemSevenMapped);

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects.
//This function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter


function displayCuisineTypeAndDishName(dishes) {
  let result = dishes.map((dish) => {
    return dish.cuisine + " " + dish.name;
  });
  return result;
  }
let displayVegetarianDishName = displayCuisineTypeAndDishName(filterVegetarian);
// calling function created in Number 1.
console.log("Number 8 result: ", displayVegetarianDishName);

// <<<<<<<<<<<<<<<<< BONUS <<<<<<<<<<<<<<<<<
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not need to check the array's indexes to find out what the array INCLUDES.
//Filter

function findChickpea(dishes) {
  let result = dishes.filter((dish) => {
    if (
      dish.ingredients.includes("chickpea")
    ) {
      return true;
    }
  });
  return result;
}
let result = findChickpea(dishes);
console.log("Number 9 result: ", result)

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.
function allServing(dishes){
  let result = dishes.map((dish)=> {
    return dish.servings;
  });
  return result;
}
function totalServing(total, serving)
{
  return total + serving;
}
let serving = allServing(dishes)
let total = serving.reduce(totalServing, 0);
console.log("Number 10 result: ", total);

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

let distinctName = [...dishes.reduce((map, dish) => map.set(dish.cuisine, dish),new Map()).values()];
console.log("Number 11 result: ", distinctName);

//12. Revisit your solution for Problem 6.  Use the filter method to eliminate duplicate cuisine types, leaving only distinct values in the array.

let distinctCuisine = dishes.filter((dish, index) => {
    return index === dishes.findIndex((Object) => {
      return dish.cuisine === Object.cuisine;
    })
  })  

console.log("Number 12 result: ", distinctCuisine);

  
