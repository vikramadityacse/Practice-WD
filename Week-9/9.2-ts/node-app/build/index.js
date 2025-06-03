"use strict";
// interface User {
//     firstName : String;
//     lastName : String;
//     email : String;
//     age : number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
function islegal(user) {
    if (user.age > 18) {
        return true;
    }
    return false;
}
let ans = islegal({
    firstname: "Vikram",
    lastName: "Aditya",
    email: "vikram@gmail.com",
    age: 25
});
console.log(ans);
