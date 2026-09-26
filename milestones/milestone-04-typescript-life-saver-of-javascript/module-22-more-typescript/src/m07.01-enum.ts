enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let offDay = Day.Thursday;

console.log(offDay);
console.log(Day.Monday);
console.log(Day.Sunday);


console.log();


enum Roles {                          // String type enum
    Admin = "Admin",
    Moderator = "Moderator",
    Guest = "Guest"
}

console.log(Roles.Admin);
console.log();



const user = {
    name: "Alisa",
    role: Roles.Admin
    // role: Roles.Moderator
}

console.log(user);