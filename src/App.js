import React from "react";
import { useState } from "react";
import "../src/App.css"
import TodoList from "./ToDoList"


function App() {
  const [liVal,setliVal] = useState("");
  const [listeItem, setlistItem]=useState([]);
  const addChanges=(event)=>{
    setliVal(event.target.value)
  }
  
  const addToDo=()=>{
    setlistItem([...listeItem,liVal])
    setliVal("")
  }
  const remItem = ( id ) =>{
    setlistItem(
      listeItem.filter((arrItem, ind)=>{
        return ind !==id;
      }) 
    )
  }
  return (
    <div className="main-page">
      <h1>What are you upto?</h1>
      <div className="todo-tab">
        <input placeholder="Add your note" onChange={addChanges} value={liVal}></input>
        <button onClick={addToDo} className="addButton">+</button>
        <ul>
          {listeItem.map((val , ind )=>{
           return( <TodoList item={val} id={ind} key={ind} onSelect={remItem}/>
            )
          })}
        </ul>
        </div>

     
    </div>
  );
}

export default App;
