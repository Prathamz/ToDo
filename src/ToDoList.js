import React from "react";

const TodoList = (props) =>{
    let new_item=null
    if(props.item!==""){
        new_item= <li>{props.item}</li>
    }
    else{
        return(null)
    }
return(
    <div className="listItems">
    <button onClick={()=> props.onSelect(props.id)}> X </button>
    {new_item}
    </div>

)
}

export default TodoList;