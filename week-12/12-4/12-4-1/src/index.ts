import {Client} from 'pg';

const client = new Client({
    connectionString: 'postgresql://postgres:mysecretpassword@localhost/postgres'
})


// create table --> 

// async function createUsersTable(){
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users2 (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(255) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//         `)
//         console.log(result)
// }

// createUsersTable();


// insert data in table -->
async function insertUserData(username: string, password: string, email: string){
    await client.connect()
    
    //SQL Injection

   /* Method -1 --> Not Safe (worng way)
    const result = await client.query(`
            INSERT INTO users (username , password, email)
            VALUES ('${username}','${password}','${email}');
        `)
    console.log(result)*/

    /* Method -2 --> Safer (right way) as prone to SQL injection and saves from attacks*/
    const result = await client.query(`
        INSERT INTO users (username, password, email)
        VALUES ($1, $2, $3)
        `, [username, password, email] )
        console.log(result)
        
}

insertUserData('pratham','delhilover','beatboxer@gmail.com');