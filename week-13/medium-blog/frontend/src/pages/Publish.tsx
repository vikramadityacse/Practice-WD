import { Appbar } from "../components/Appbar"
import axios from 'axios';
import { BACKEND_URL } from "../config";
import { useState, type ChangeEvent} from "react";
import { useNavigate } from "react-router-dom";

 
export const Publish = ()=>{
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return <div>
        <Appbar/>
        <div className="flex justify-center w-full p-12">   
            <div className="max-w-screen-lg w-full">
                <input onChange = {(e)=>{
                        setTitle(e.target.value);
                    }}  type="text" className=" focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    block w-full p-2.5" placeholder="Title"/>
                
                <TextEditor onChange={(e)=>{
                        setContent(e.target.value);
                    }}/>
                
                <button onClick={async()=>{
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                            title,
                            content,
                        },{
                            headers : {
                                Authorization : localStorage.getItem("token")
                            }
                        })
                        navigate(`/blog/${response.data.id}`)
                    }} 
                    type="submit" className=" mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center 
                    text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">Publish Post</button>
            
            </div>
        </div>
    </div>
}

function TextEditor({onChange}:{onChange : (e: ChangeEvent<HTMLTextAreaElement>) => void}){
    return <div>
        <div className="w-full mb-4  mt-4">
            <div className="flex justify-center">
                <div className="bg-white rounded-b-lg w-full">
                    <label className="sr-only">Publish Post</label>
                    <textarea onChange = {onChange} id="editor" rows={8} className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    block w-full p-2.5" placeholder="Write a blog..." required/>
                </div>
            </div>
        </div>
    </div>
}