"use strict";
;
function sumOfSum(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfSum({ name: "tara", age: 20 }, { name: "ved", age: 23 });
console.log(age);
