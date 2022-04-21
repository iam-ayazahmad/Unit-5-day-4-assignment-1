import "../../src/App.css"
const Todoitem=({todo,handlestatus})=>{
    return <div className="myitem">{todo.title} - {todo.status ? "Done":"Not Done"} <button onClick={()=>handlestatus(todo.id)}>Toogle</button></div>
}
export {Todoitem}
