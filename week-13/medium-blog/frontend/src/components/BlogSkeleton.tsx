

export const BlogSkeleton = ()=>{
    return  <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md">
        <div className="flex pl-1">
            <div className="">
                 <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
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
    
    <div>
                <div role="status" className="max-w-sm animate-pulse">
                    
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
    </div>
}