import { NextResponse } from "next/server";

//app.get("api/user", function(){
//    res.json({
//      email : " ",
//      name : " "
//      })      
//})

// Similarly 

export function GET(){
    return NextResponse.json({
        email: "vikramaditya@gmail.com",
        name: "Vikramaaditya"
    })
}