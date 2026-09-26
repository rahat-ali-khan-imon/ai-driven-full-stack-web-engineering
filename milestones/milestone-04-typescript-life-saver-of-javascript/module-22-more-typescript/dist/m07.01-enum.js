"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
let offDay = Day.Thursday;
console.log(offDay);
console.log(Day.Monday);
console.log(Day.Sunday);
console.log();
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["Moderator"] = "Moderator";
    Roles["Guest"] = "Guest";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
console.log();
const user = {
    name: "Alisa",
    role: Roles.Admin
    // role: Roles.Moderator
};
console.log(user);
//# sourceMappingURL=m07.01-enum.js.map