import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

export const NEXT_AUTH = {
        providers : [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label:"Username", type:"text", placeholder: "Email"},
                password: {label:"Password", type:"password", placeholder:"Password"}
            },
            async authorize(credentials: any){
                
                //----------------validate: old style----------------
                // const username = credentials.username;
                // const password = credentials.password;
                // const user = await prisma.user.findOne({
                //     where : {
                //         email: username,
                //         password: password
                //     }
                // })
                // return {
                //     id: user.id,
                //     name: user.name
                // }

                return{
                    id: "fefe",
                    name: "Vikramaditya",
                    email: "monu7451@gmail.com"
                }
            }
        }),
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID || "",
            clientSecret : process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks : {
        jwt:({token, user} : any) => {
            token.userId = token.sub;
            return token;
        },
        session:({session, token, user} : any) =>{
            console.log(session)
            if(session && session.user){
                session.user.id = token.userId; //token.sub
            }
            return session;
        }
    }
}