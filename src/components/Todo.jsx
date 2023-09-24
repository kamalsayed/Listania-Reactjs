import React from "react";
import { ToDoContext } from "../App";

const ToDo = () =>{
    const {ToDo,setToDo,Done,setDone} =React.useContext(ToDoContext);
    return (
        <>
       <div className="grid-container">
            <div className="grid-item item-1">
            <p>add to do category</p>
            </div>
            <div className="grid-item">
            <p>to do category 1</p>
            </div>
            <div className="grid-item">
            <p>to do category 2</p>
            </div>
            <div className="grid-item">
            <p>to do category 3</p>
            </div>
            <div className="grid-item">
            <p>to do category 4</p>
            </div>
            <div className="grid-item">
            <p>to do category 5</p>
            </div>
        
        
        
        </div>
        </>
    );



}

export default ToDo;