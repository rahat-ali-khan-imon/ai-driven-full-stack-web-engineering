function topRatedRestaurant(restaurants) {
    let topRating = restaurants[0].rating;                                  // !

    for(let i = 0; i < restaurants.length; i++) {
        if(restaurants[i].rating > topRating) {
            topRating = restaurants[i].rating;
        }
    }

    return topRating;
}

const result = topRatedRestaurant([{name:"Chillox", rating:4.5}, {name:"Sultan's Dine", rating:4.8}]);

console.log(result);
console.log(topRatedRestaurant([{name:"KFC", rating:4.2}, {name:"Pizza Hut", rating:4.6}]));