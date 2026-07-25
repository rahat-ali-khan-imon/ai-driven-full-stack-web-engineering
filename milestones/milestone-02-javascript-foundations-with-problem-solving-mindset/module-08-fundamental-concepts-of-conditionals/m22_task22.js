/*
Build a simple login + role-check system that verifies username/password and shows a different message 
based on admin/user role — combine everything from this module (comparison, logical operators, if-else, 
ternary).
*/


let username = "admin";
let password = "12345";
let role = "admin";

if(username === "admin" && password === "12345") {
    console.log("Login Successful");

    const dashboard = (role === "admin")
        ? "Welcome to Admin Dashboard"
        : "Welcome to User Dashboard";

    console.log(dashboard);
} else {
    console.log("Invalid Username or Password");
}
console.log();



username = "user";
password = "12345";
role = "user";

if(username === "user" && password === "12345") {
    console.log("Login Successful");

    const dashboard = (role === "admin")
        ? "Welcome to Admin Dashboard"
        : "Welcome to User Dashboard";

    console.log(dashboard);
} else {
    console.log("Invalid Username or Password");
}
console.log();



username = "admin";
password = "54321";
role = "admin";

if(username === "admin" && password === "12345") {
    console.log("Login Successful");

    const dashboard = (role === "admin")
        ? "Welcome to Admin Dashboard"
        : "Welcome to User Dashboard";

    console.log(dashboard);
} else {
    console.log("Invalid Username or Password");
}