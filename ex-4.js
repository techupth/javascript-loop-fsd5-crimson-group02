// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];

let i = 0;
while (i < restaurants.length) {
  let restaurantsName = "Restaurant Name: " + restaurants[i];
  newRestaurants.push(restaurantsName);
  i++;
}

console.log(newRestaurants);
