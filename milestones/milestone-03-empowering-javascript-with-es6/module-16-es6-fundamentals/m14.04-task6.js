const extractUserInfo = (userObj) => {
    const {
        user: {
            name: userName,
            age: userAge
        },
        hobbies
    } = userObj;

    const [firstHobby = 'nothing yet'] = hobbies;                       //

    return `${userName} (${userAge}) likes ${firstHobby}`;              //
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