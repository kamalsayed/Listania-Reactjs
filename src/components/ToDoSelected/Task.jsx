import {faCircle,faStar,faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import{faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import '../Todo.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {addToDo , toggleToDo ,toggleImportant} from '../ToDoListSlice';
import { useSelector ,useDispatch} from 'react-redux';
import { useState } from 'react';
import audiofile from '../../assets/mixkit-bike-notification-bell-590.wav';


const Task =({id , text ,completed ,color ='rgb(82, 82, 236)'})=>{

    
    const playAudio = () => {
        const audio = new Audio(audiofile);
        audio.play();
    };

    const toDoList = useSelector((state) => state.todolist.todos);

    const dispatch = useDispatch();

    const [hover ,setHover] =useState(false);

    const [hoverI ,setHoverI] =useState(false);

    const getCompleted=()=>{
        const complete=toDoList.find(todo =>todo.id === id);
        return complete.completed;
    }


    const getImportant=()=>{
        const important=toDoList.find(todo =>todo.id === id);
        return important.important;
    }

    const imp =getImportant();

    const comp =getCompleted();

   
    

        if(completed){
            return(
                <>
            <div style={{display:`${comp ?'grid' :'none'}`}} id={id} className='task-todo'> 
            <button style={{color:color}} onMouseEnter={()=>{setHover(true)}}  onMouseLeave={()=>{setHover(false)}} onClick={()=>{
                
                dispatch(toggleToDo(id))

                }}  className='task-todo-circle'>
                
                <FontAwesomeIcon style={{display :`${hover ?  'none' :'block' }`}} icon={faCircleCheck} />
            
                                            
                <FontAwesomeIcon style={{display :`${hover ?  'block' : 'none' }`}} icon={faCircle} />

                
                </button>
            <p style={{textDecoration: `${comp ? 'line-through' : 'none' }`  }}>
            {
                text
            }
         
            </p>
            <button  style={{color:color}} onClick={()=>{dispatch(toggleImportant(id))}} onMouseEnter={()=>{setHoverI(true)}}  onMouseLeave={()=>{setHoverI(false)}}  className='task-todo-star'><FontAwesomeIcon icon={faStarSolid}  style={{display  : `${imp || hoverI ? 'block' : 'none'} `}}  /><FontAwesomeIcon style={{display  : `${imp || hoverI ? 'none' : 'block'} `}} icon={faStar} /></button>
    
            </div>
            </>
            )
        }else{
        return(
            <>
            <div style={{display:`${comp ?'none' :'grid'}`}} id={id} className='task-todo'> 
            <button style={{color:color}} onMouseEnter={()=>{setHover(true)}}  onMouseLeave={()=>{setHover(false)}} onClick={()=>{
                
                dispatch(toggleToDo(id));
                playAudio();
                }}  className='task-todo-circle'><FontAwesomeIcon style={{display :`${hover ? 'block' :'none' }`}} icon={faCircleCheck} /><FontAwesomeIcon style={{display :`${hover ? 'none' :'block' }`}} icon={faCircle} /></button>
            <p style={{textDecoration: `${comp ? 'line-through' : 'none' }` }}>
            {
                text
            }
         
            </p>
            <button style={{color:color}} onClick={()=>{dispatch(toggleImportant(id))}} onMouseEnter={()=>{setHoverI(true)}}  onMouseLeave={()=>{setHoverI(false)}}  className='task-todo-star'><FontAwesomeIcon icon={faStarSolid}  style={{display  : `${imp || hoverI ? 'block' : 'none'} `}}  /><FontAwesomeIcon style={{display  : `${imp || hoverI ? 'none' : 'block'} `}} icon={faStar} /></button>
    
            </div>
            </>
        )
        }

   
   
}

export default Task;