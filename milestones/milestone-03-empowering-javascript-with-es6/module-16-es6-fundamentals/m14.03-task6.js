const extractUserInfo = (userObj) => {
    const {
        user: {
            name: userName,
            age: userAge
        },
        hobbies
    } = userObj;

    console.log(user);                                      //
    console.log(userName);
    console.log(userAge);
    console.log(hobbies);
}

console.log(
    extractUserInfo({
        user: { name: "Sadia", age: 22 },
        hobbies: ["reading", "coding"]
    })
);

console.log(
    extractUserInfo({
        user: { name: "Rafi", age: 19 },
        hobbies: []
    })
);

console.log(
    extractUserInfo({
        user: { age: 30 },
        hobbies: []
    })
);