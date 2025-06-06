import {useState} from "react";


import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox onChange = {e=>{
                    setUsername(e.target.value);
                }} placeholder="john@gmail.com" label={"Username"}/>
                <InputBox onChange = {e=>{
                    setPassword(e.target.value);
                }} placeholder="123!dw" label={"Password"}/>
                <div className="p-4">
                    <Button onClick = {async()=>{
                        const response = await axios.get("http://localhost:3000/api/v1/user/signin",{
                            username,
                            password
                        })
                    }} label = {"Sign in"}/>
                </div>
                <BottomWarning />
            </div>
        </div>
    </div>
    

}