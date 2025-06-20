import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export function GET(req : NextRequest){
    return NextResponse.json({
        email: "vikramaditya@gmail.com",
        name: "Vikramaaditya"
    })
}

export async function POST(req : NextRequest){
    const body = await req.json();

    try{
        const response = await client.user.create({
            data:{
                    name : body.name,
                    email : body.email,
                    password : body.password
                }
        })

        return NextResponse.json({
            message : "You are Signed In"
        }, {
            status: 200
        })

    }catch(e){
        console.log(e);
        return NextResponse.json({
            message : "Bad Credientials"
        }, {
            status : 403
        })
    }
    

}