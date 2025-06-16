import { CompleteBlog } from "../components/CompleteBlog";
import { getBlog } from "../hooks";
import { useParams } from "react-router-dom";

//atomFamilies/selectorFamilies
export const Blog =()=>{
    const { id } = useParams();
    const {loading, blog} = getBlog({id : id || ""});
    if(loading){
        return <div>
            loading.....
        </div>
    }
    return <div>
        <CompleteBlog blog ={blog} />
    </div>
}