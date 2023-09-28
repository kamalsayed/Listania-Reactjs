import React, { useState } from "react";
import { ToDoContext } from "../App";
import SideBar from "./SideBar";
import './Todo.css';
import { useSelector ,useDispatch} from 'react-redux';
import {changeOpen} from './openCloseSlice';
import ToDoContent from './ToDoContent';
import DialogMsg from './ToDoSelected/dialogMsg';

const ToDo = ({state}) =>{
    const {ToDo,setToDo,Done,setDone} =React.useContext(ToDoContext);
    const open = useSelector((state) => state.open.value);
    const selected = useSelector((state) =>state.selectedSide.choice);
    const dispatch = useDispatch();
    const deleteSelect = useSelector((state) => state.deleteItem.id);

    if(open){
        return (
            
            <>
          
            <div  className={`container-todo ${deleteSelect ? 'delete' : ''}`}>
            
                <SideBar />
            
           
           

                <ToDoContent  />
                
                

            </div>
            {deleteSelect ? <DialogMsg /> : <></> }
             </> 
        
        
    )
    }else{
        return(
<>      
         
            <div className={`container-todo-closed ${deleteSelect ? 'delete' : ''}`}>
            
                <SideBar />
            
                <ToDoContent  />
            
                
            </div>
            {deleteSelect ? <DialogMsg /> : <></> }
             </>

        );
    }
   



}

export default ToDo;