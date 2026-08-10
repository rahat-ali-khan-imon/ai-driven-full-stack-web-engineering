const filterActiveUsers = (users) => {
    if(!Array.isArray(users) || users.length === 0) {
        return 'Invalid';
    }

    for(const user of users) {
        if(!user.hasOwnProperty('isActive')) {
            return 'Invalid';
        }
    }

    return users.filter((user) => user.isActive === true);
};

console.log(
    filterActiveUsers([
        {name: 'A', isActive: true},
        {name: 'B', isActive: false}
    ])
);
console.log(filterActiveUsers([]));
console.log(filterActiveUsers([{name: 'A'}]));
console.log(filterActiveUsers('users'));
console.log(                                                        //
    filterActiveUsers([
        {name: 'A', isActive: true},
        {name: 'B', isActive: true},
        {name: 'C', isActive: false}
    ])
);
console.log(                                                //
    filterActiveUsers([
        {name: 'A', isActive: 'true'}
    ])
);
console.log(filterActiveUsers(null));
console.log(filterActiveUsers(undefined));