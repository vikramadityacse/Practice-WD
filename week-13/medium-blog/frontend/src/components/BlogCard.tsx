import { Link } from 'react-router-dom'  

interface BlogCardProps{
    id : number,
    authorName : string,
    title : string,
    content : string,
    publishedDate : string,
}

export const BlogCard = ({id,authorName, title, content, publishedDate}:BlogCardProps) => {

    return <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md">
        <div className="flex pl-1">
            <div className="">
                 <Avatar name={authorName}/> 
            </div>
            <div className="font-normal pl-1 text-sm flex justify-center flex-col">
                {authorName}
            </div>
            <div className="flex justify-center flex-col pl-1 flex justify-center flex-col">
                <DOT />
            </div>
            <div className="font-thin pl-1 text-sm text-slate-500 flex justify-center flex-col">
                {publishedDate}
            </div>
        </div>
        <Link to={`/blog/${id}`}><div className="font-semibold text-md pl-2 pt-2 cursor-pointer">
            {title}
        </div></Link>
        <div className="font-extralight text-sm pl-2 pt-1">
            {content.slice(0, 250)+ "..."}
        </div>
        <div className="text-slate-500 font-normal text-sm pl-2 pt-4">
            {Math.ceil(content.length/200) + " min read"}
        </div>
    </div>
}

function DOT(){
    return <div className="h-1 w-1 rounded-full dark:bg-gray-600 ">

    </div>
}

export function Avatar({name}: {name : string}){
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="text-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>

}