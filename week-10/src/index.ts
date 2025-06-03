import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function insertUser(email:string, password:string, firstName:string, lastName:string) {
    const res = await prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        },
        select : {
            id: true,
            firstName:true,
            lastName:true,
            email:true
        }
    })
    console.log(res);
}

insertUser("vikram2@gmail.com", "123456", "vikram", "monu");