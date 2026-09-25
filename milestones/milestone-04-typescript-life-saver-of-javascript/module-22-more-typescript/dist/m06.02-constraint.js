"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
console.log(useState(0));
console.log(useState("0"));
console.log(useState("Hello"));
console.log(useState(""));
console.log(useState(10));
console.log(useState(true));
console.log();
// error
// useState<User>();
// useState<User>("Hi");
// useState<User>(null);
console.log(useState(null));
console.log(useState({
    email: "email@gmail.com",
    isLoggedIn: false
}));
//# sourceMappingURL=m06.02-constraint.js.map