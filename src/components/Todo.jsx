import React, { useState } from "react";
import { ToDoContext } from "../App";
import SideBar from "./SideBar";
import './Todo.css';
import { useSelector ,useDispatch} from 'react-redux';
import {changeOpen} from './openCloseSlice';
import ToDoContent from './ToDoContent';
import {selectSide} from './SelectedSideSlice';

const ToDo = () =>{
    const {ToDo,setToDo,Done,setDone} =React.useContext(ToDoContext);
    const open = useSelector((state) => state.open.value);
    const selected = useSelector((state) =>state.selectedSide.choice);
    const dispatch = useDispatch();
    if(open){
        return (
            <>
          
            <div className="container-todo">
            
                <SideBar />
            
           
            
                <ToDoContent  />
            </div>
         
             </>
        
        
    )
    }else{
        return(
<>      
         
            <div className="container-todo-closed">
            
                <SideBar />
            
                <ToDoContent  />
            
            
            </div>
           
             </>

        );
    }
   



}

export default ToDo;