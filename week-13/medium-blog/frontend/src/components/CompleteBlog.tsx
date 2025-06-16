import type { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"


export const CompleteBlog = ({blog}: {blog: Blog})=> { 
    
    return <div> 
                <Appbar/>
                <div className="flex justify-center">
                    <div className="grid grid-cols-12 px-10 w-full pt-15 max-w-screen-xl pt-12">
                        <div className="col-span-8 pr-6">
                            <div className="text-3xl font-extrabold">
                                {blog.title}
                            </div>
                            <div className="text-slate-500 pt-2">
                                Posted on 2nd December 2022
                            </div>  
                            <div className="text-medium font-normal pt-2">
                                {blog.content}
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="font-normal text-lg text-slate-700 ">
                                Author
                            </div>
                                <div className="flex">
                                    <div className="pr-2 flex flex-col justify-center">
                                        <Avatar name={blog.author.name || "A"}/>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl ">
                                            {blog.author.name || "Anonymous"}
                                        </div>
                                        <div  className="font-normal text-base text-slate-400">
                                            Random catch phrase about the author's ability to grab the user's attention 
                                        </div>
                                    </div>
                                   
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
}   