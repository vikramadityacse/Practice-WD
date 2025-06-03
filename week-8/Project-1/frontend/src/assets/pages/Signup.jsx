import {useState} from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = ()=>{
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                
                <Heading label={"Sign Up"} />
                <SubHeading label ={"Enter your information to create an account"}/>
                <InputBox onChange = { e => {
                    setFirstName(e.target.value);
                }} placeholder = "John" label ={"First Name"}/>
                <InputBox onChange = {e => {
                    setLastName(e.target.value);
                }} placeholder = "Singh" label ={"Last Name"}/>
                <InputBox onChange = {e => {
                    setUsername(e.target.value);
                }} placeholder = "john@gmail.com" label = {"Email"}/>
                <InputBox onChange = {e => {
                    setPassword(e.target.value);
                }} placeholder = "" label = {"Password"}/>

                <div className="p-4">
                    <Button onClick= {async ()=>{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            firstname,
                            lastname,
                            password,
                        });
                        localStorage.setItem("token", response.json.token)
                        navigate("/dashboard")
                    }} label="Sign Up" />
                </div>

                <BottomWarning label={"Already have an account?"} buttonText = {"Sign in"} to="/signin"/>
            </div>
        </div>
    </div>
}