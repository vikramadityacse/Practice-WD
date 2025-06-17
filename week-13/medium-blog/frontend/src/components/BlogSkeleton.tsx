import { DOT } from "./BlogCard"


export const BlogSkeleton = ()=>{
    return <div role="status" className=" animate-pulse border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md">
             <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md"></div>
                <div className="flex pl-1"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="flex justify-center flex-col pl-1 flex justify-center flex-col">
                      <DOT />
                    </div>
                     <div className="font-thin pl-1 text-sm text-slate-500 flex justify-center flex-col">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>
                    <div className="font-semibold text-md pl-2 pt-2 cursor-pointer">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>
                    <div className="font-extralight text-sm pl-2 pt-1">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>
                    <div className="text-slate-500 font-normal text-sm pl-2 pt-4">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>
                <span className="sr-only">Loading...</span>
            </div>
}