import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth"

export default function(){
    const session = getServerSession();
    return <div>
        <Appbar />
        User Component2
        {JSON.stringify(session)}
    </div>
}