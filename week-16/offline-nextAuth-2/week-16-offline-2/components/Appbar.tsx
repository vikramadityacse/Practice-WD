"use client";
// import { useRouter } from "next/navigation";
import {signIn, signOut, useSession} from "next-auth/react"

export const Appbar = () =>{

    // const router = useRouter();
    const session = useSession();
    return <div>

        <button onClick={()=>{                            /* Modern Way */
            signIn();
        }}>SignIn</button> <br />

        <button onClick={()=>{
            signOut();
        }}>LogOut</button>
       
        {/* <button onClick={() => {                      TRADITIONAL WAY
            router.push("api/auth/signin")
        }}>Login</button> */}

        {JSON.stringify(session)}
    </div>
}