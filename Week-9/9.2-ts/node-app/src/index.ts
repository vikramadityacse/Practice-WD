
interface User {
    firstName : String;
    lastName : String;
    email? : String;
    age : number;
}


function islegal(user : User){
    if(user.age > 18){
        return true;
    }
    return false;
}


console.log(islegal({
    firstName : "Vikram",
    lastName : "Aditya",
    age : 25
}));