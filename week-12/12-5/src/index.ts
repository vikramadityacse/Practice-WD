import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// Insert User Fn
async function insertUser(username:string, password:string,email:string ,firstname:string, lastName:string){
    const res = await prisma.user.create({
        data:{
            username,
            password,
            email,
            firstname,
            lastName,
        }
    })
    console.log(res);
}

insertUser('test','test','test','test','test')


/* Prisma has written features to replace SQL queries for you 

prisma.user.findMany({
    id:1
})

// ---> SELECT * FROM "User" WHERE id="1"; */
