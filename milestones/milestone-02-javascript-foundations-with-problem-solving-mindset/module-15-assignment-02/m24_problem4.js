function topRatedRestaurant(restaurants) {
    return restaurants[0].rating;                                  //
}

const result = topRatedRestaurant([{name:"Chillox", rating:4.5}, {name:"Sultan's Dine", rating:4.8}]);

console.log(result);
console.log(topRatedRestaurant([{name:"KFC", rating:4.2}, {name:"Pizza Hut", rating:4.6}]));