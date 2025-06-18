import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client/extension";

const client = new PrismaClient();

export async function POST(req: NextRequest){
    //extract body
    const body = await req.json();
    await client.user.create({
        data:{
            email : body.email, 
            password : body.password
        }
    })
    //store the body in the database
    console.log(body);

    return Response.json({
        message: "You are logged in!"

    })
}