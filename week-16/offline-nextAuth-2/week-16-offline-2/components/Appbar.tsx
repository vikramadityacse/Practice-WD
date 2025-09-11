"use client";
// import { useRouter } from "next/navigation";
import {signIn, signOut} from "next-auth/react"

export const Appbar = () =>{

    // const router = useRouter();
    return <div>

        <button onClick={()=>{                            /* Modern Way */
            signIn();
        }}>SignIn</button>
       
        {/* <button onClick={() => {                      TRADITIONAL WAY
            router.push("api/auth/signin")
        }}>Login</button> */}


    </div>
}