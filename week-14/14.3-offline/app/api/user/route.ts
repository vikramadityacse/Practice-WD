import { NextRequest, NextResponse } from "next/server";

//app.get("api/user", function(){
//    res.json({
//      email : " ",
//      name : " "
//      })      
//})


export function GET(req : NextRequest){
    // do validation check
    // fetch data from db
    return NextResponse.json({
        email: "vikramaditya@gmail.com",
        name: "Vikramaaditya"
    })
}

export async function POST(req : NextRequest){
    //body :- 
    const body = await req.json();
    //headers :-
    console.log(req.headers.get("authorization"))
    //queryParams :-
    console.log(req.nextUrl.searchParams.get("name"))
    console.log(body)
    // hit db with username and password 
    return NextResponse.json({
        message : "You are Signed In"
    })
}