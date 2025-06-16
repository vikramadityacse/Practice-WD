import React from "react"

export default function({ children } : {children : React.ReactNode}){
    return <div>
        <div className="border-b text-center">
            30% off on Premium membership ....offer valid for next 3 days
        </div>
        {children}
    </div>

}