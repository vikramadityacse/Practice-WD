import { NextResponse } from "next/server";

//Global Catch Function / Catch All Handler
export function GET(){
    return NextResponse.json({
        message: "Hello from Auth catch all handler"
    })
}

export function POST(){
    return NextResponse.json({
        message:"Hello Post Request"
    })
}