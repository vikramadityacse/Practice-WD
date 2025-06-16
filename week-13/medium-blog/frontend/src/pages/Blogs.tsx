import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { fetchBlogs } from "../hooks";

export const Blogs = () => {
    const {loading, blogs} = fetchBlogs();
   
    if(loading){
        return <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
        </div>
    }

    return <div >
        <Appbar />
        <div className="flex justify-center">
            <div >
                {blogs.map(blog => <BlogCard 
                    id = {blog.id}
                    authorName = {blog.author.name || "anonymous"}
                    title = {blog.title} 
                    content = {blog.content} 
                    publishedDate = {"01st Oct, 2304"}/> 
                )}
              
            </div>
        </div> 
    </div>
}