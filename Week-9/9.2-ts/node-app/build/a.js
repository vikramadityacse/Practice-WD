"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// def of function
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
// calling of function
runAfter1S(function () {
    console.log("bmw m2 manual is crazy");
});
//---------------------------------------------------------------
function sum(a, b) {
    return a + b;
}
const value = sum(2, 5);
console.log(value);
