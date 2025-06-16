interface User{
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

//-------------------PICK----------------------------------
type updateProps = Pick<User, 'name' | "age" | 'email'>

function updateUser(updatedProps: updateProps){
}

//----------------- PARTIAL---------------------------------
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>
type UpdatePropsOptional = Partial<UpdateProps>

function updateUser2(updatedProps: UpdatePropsOptional){
} 

//-------------------READONLY-------------------------------

type Student ={
    readonly name: string;
    readonly age: number;
}

const st: Student = {
    name: 'Harry',
    age: 22
}

   // for readonly we can do these 2 implementations 

type Student2 ={
    name: string;
    age: number;
}

const st2: Readonly<Student2> = {
    name: 'Harry',
    age: 22
}


  // st.age = 12;  --> gives error as cannot change age as age is a readonly value


 //-------------------RECORDS & MAPS-----------------------------------

 // method 1 - ugly way
 type t1 = {
    id: string;
    username: string;
 }

 type T = {
    [key:string] : t1;
 }

 const labors:T={
    "ras@de1":{
        id : "ras@de1",
        username : "harkirat"
    }, 
    "tus@vd7":{
        id: "tus@vd7",
        username:"tushar"
    }
 }



//  method-2 - cleaner syntax using Record to make key-value pairs

type UsersAge = {
    [key: string]:number;
}

//--- User2 and UserAge both are same, User2 is using record for cleaner syntax
type Users2 = Record<string, number>; 
// key is a string and value is a number

const u: UsersAge={
    "ras@de1" : 28,
    "tus@vd7" : 25
}


// method-3 - cleaner syntax using Maps to make key-value pairs

type Labors = {
    name:string,
    age:number,
    email:string
}
const users = new Map<string, Labors>()
users.set("ras@de1", {name : "Rasam", age:30, email:"ras@gmail.com"})
users.set("tus@vd7", {name : "tushar", age:25, email:"tush@gmail.com"})

const oneUser = users.get("ras@de1")
console.log(oneUser)


//------------------------- Exclude --------------------------------

type Eventtypes = 'click' | 'scroll' | 'mousemove';
// Using Exclude to create a new type without 'scroll'
type ExcludeEvent = Exclude<Eventtypes, 'scroll'>; // 'click' | 'mousemove'

// Function that accepts only 'click' and 'mousemove' events
const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
// handleEvent('scroll'); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.

//-----------------------Type Inferences In Zod------------------------------------------------------

import { z } from 'zod';
import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

app.put("/user", (req, res) => {
  const result = userProfileSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: result.error });
    return;
  }

  // Type of updateBody is inferred from userProfileSchema
  const updateBody = result.data;

  // update database here
  res.json({
    message: "User updated",
    updateBody
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));