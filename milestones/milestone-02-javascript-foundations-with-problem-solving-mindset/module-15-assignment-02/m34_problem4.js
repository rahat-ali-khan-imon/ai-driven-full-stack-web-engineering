function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants) || restaurants.length === 0) {
        return 'Invalid';
    }

    let topRating = restaurants[0].rating;
    let restaurantName = restaurants[0].name;

    for(let i = 1; i < restaurants.length; i++) {
        if(restaurants[i].rating > topRating) {
            topRating = restaurants[i].rating;
            restaurantName = restaurants[i].name;
        }
    }

    return restaurantName.toUpperCase();
}

const result = topRatedRestaurant([{name:"Chillox", rating:4.5}, {name:"Sultan's Dine", rating:4.8}]);

console.log(result);
console.log(topRatedRestaurant([{name:"KFC", rating:4.2}, {name:"Pizza Hut", rating:4.6}]));
console.log(topRatedRestaurant("restaurants"));
console.log(topRatedRestaurant([]));
console.log(topRatedRestaurant([{name:"ABC", rating: 4.4}, {name:"XYZ", rating: 0}]));
console.log(topRatedRestaurant([{name:"Hi", rating: 4.5}, {name:"Hello", rating: 4.5}]));   // Rating same