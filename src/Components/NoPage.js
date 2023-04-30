import React from "react"
import { useHistory } from "react router-dom"

export function NoPage(){
    const history = useHistory()
    return(
        <div>
            <h1>Hello! you are entered into a wrong place</h1>
            <button
            onClick={()=>history.push("/")}>
              Dashboard
            </button>
        </div>
    )
}