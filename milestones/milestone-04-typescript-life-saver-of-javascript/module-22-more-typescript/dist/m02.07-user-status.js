"use strict";
// Real-world Example: User Status
Object.defineProperty(exports, "__esModule", { value: true });
const user3 = {
    name: "Alisa",
    age: 22,
    status: "active"
};
const user4 = {
    name: "Jamal",
    age: 22,
    // status: "deleted"            // Error
    status: 'blocked'
};
console.log(user3);
console.log(user4);
//# sourceMappingURL=m02.07-user-status.js.map