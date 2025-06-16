import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b border-slate-300 flex justify-between px-10 py-4">
        <div className="flex flex-col justify-center">
            <Link to={"/blogs"}>
            <div className="cursor-pointer">
                Medium
            </div></Link>        
        </div>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none
                    focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xs px-2 py-1.5 text-center me-2 mb-2">New</button>
                <Avatar name="vikram" />
            </Link>

        </div>
    </div>
}