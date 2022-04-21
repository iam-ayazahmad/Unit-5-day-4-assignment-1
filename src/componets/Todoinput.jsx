import { useState } from "react"
import "../../src/App.css"

function Myinput({getdata}){

    const [text,setText]=useState("")

    return(
    <div>
        <input placeholder="Write " className="myitem" type="text" onChange={(e)=>{
            setText(e.target.value)
            console.log(text)
            
        }}/>
        <button className="myitem" onClick={()=>{
            getdata(text)
        }}> + </button>
        
    </div>
    
    )

}
export {Myinput}
