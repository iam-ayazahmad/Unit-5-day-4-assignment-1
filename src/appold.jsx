import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


//parent to child, parent to sibiling, sibiling to sibiling

function App() {

  const [mess,setMessage]=useState("")

  const getdata=(data)=>{

    console.log("getting from child",data)
    setMessage(data)

  }

  return (
    <div className="App">
      <First datafn={getdata} />
      <Second mymsg={mess}/>
     
    </div>
  );
}

function First({datafn}){
  const data="I'in first child"
   datafn(data)
   return <h1>{data}</h1>

 
}
function Second({mymsg}){
  
  return <div>"Getting data from sibling",{mymsg}</div>
}



export default App;
