
// def of function
function runAfter1S(fn: ()=> void) { 
    setTimeout(fn, 1000);
}


// calling of function
runAfter1S(function(){
    console.log("bmw m2 manual is crazy");
})

//---------------------------------------------------------------


function sum(a:number, b:number){
    return a+b;
}

const value : number = sum(2,5);
console.log(value);