import { useState } from "react"
import {Myinput} from "./Todoinput"
import {nanoid} from "nanoid"
import {Todoitem} from "./Todoitem"
import "../../src/App.css"

const Todo=()=>{
    const[todolist,setTodolist]=useState([])

    const getdata=(data)=>{

        const payload={
            title:data,
            status:false,
            id:nanoid(5)
        }
        setTodolist([...todolist,payload])
    }

    const handlestatus=(id)=>{
        console.log(id)
        setTodolist(
            todolist.map((e)=>(e.id===id ? {...e,status:!e.status}:e))
        )
    }

    
    return(
        
        <div>
        
        {todolist.map((e)=>{
            return <Todoitem handlestatus={handlestatus} todo={e}/>
        })}
        <Myinput getdata={getdata}/></div>
    )


}

export {Todo}