import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSort ,faLayerGroup ,faPersonWalkingArrowLoopLeft ,faPlus} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb ,faCalendarDays,faBell,faCircle} from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { changeFocus } from "../addTaskSlice";
import {addToDo , toggleToDo ,toggleImportant} from '../ToDoListSlice';


const AddTask =({important , color})=>{
    const [toDo ,setTodo] =useState('');
    const show = useSelector((state) => state.showTask.display);
    const toDoList = useSelector((state) => state.todolist.todos);
    const dispatch = useDispatch();
    
    const handleInput =(event)=>{
        setTodo(event.target.value);
    }
    if(color){
        return(
        <div  className='my-day-add-task'>
             
        <div id='my-day-input' className="tasks-red" >
            
        <button style={{color:color}} id='add-task-circle' onClick={()=>{
            if(show=='none'){
                dispatch(changeFocus());
            }
        }}> <FontAwesomeIcon style={{display:`${show == 'none' ? 'block' : 'none'}` , color:color}} icon={faPlus} /><FontAwesomeIcon  style={{display:`${show == 'grid' ? 'block' : 'none'}` , color:color}} icon={faCircle} /></button>    
       
       <input  onFocus={()=>{
        if(show == 'none'){

        dispatch(changeFocus())

        }
        }}

        value={toDo}

        onChange={handleInput}
     
       
       
       type='text' placeholder='Add a task' />
      
       </div>
       
        

        <div style={{display:show}} id='my-day-task-btns'>
        
        <div id="my-day-left-btn">
        <button ><FontAwesomeIcon icon={faCalendarDays} /></button>
        <button ><FontAwesomeIcon icon={faBell} /></button>
        <button ><FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} /></button>
        </div>

        <div id="my-day-right-btn">
        <button  onClick={()=>{
            if(toDo.length>0 && toDo.length<100 ){
            setTodo('');
            const ID =Math.random().toString()+Date.now();
            dispatch(addToDo( {id:ID ,text: toDo}));
            if(important){
            dispatch(toggleImportant(ID));
            }
            }
            }} >Add</button>
        </div>
        </div>
        
    
    </div>
        )
    }
    else{

    return(
        <div  className='my-day-add-task'>
             
                <div id='my-day-input' >
                    
                <button id='add-task-circle' onClick={()=>{
                    if(show=='none'){
                        dispatch(changeFocus());
                    }
                }}> <FontAwesomeIcon style={{display:`${show == 'none' ? 'block' : 'none'}`}} icon={faPlus} /><FontAwesomeIcon  style={{display:`${show == 'grid' ? 'block' : 'none'}`}} icon={faCircle} /></button>    
               
               <input className={`${color ? '.tasks-red' : ''}`} onFocus={()=>{
                if(show == 'none'){
                dispatch(changeFocus())
                }
                }}

                value={toDo}

                onChange={handleInput}
             
               
               
               type='text' placeholder='Add a task' />
              
               </div>
               
                

                <div style={{display:show}} id='my-day-task-btns'>
                
                <div id="my-day-left-btn">
                <button ><FontAwesomeIcon icon={faCalendarDays} /></button>
                <button ><FontAwesomeIcon icon={faBell} /></button>
                <button ><FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} /></button>
                </div>

                <div id="my-day-right-btn">
                <button  onClick={()=>{
                    if(toDo.length>0 && toDo.length<100 ){
                    setTodo('');
                    const ID =Math.random().toString()+Date.now();
                    dispatch(addToDo( {id:ID ,text: toDo}));
                    if(important){
                    dispatch(toggleImportant(ID));
                    }
                    }
                    }} >Add</button>
                </div>
                </div>
                
            
            </div>
    );
                }
}
export default AddTask;