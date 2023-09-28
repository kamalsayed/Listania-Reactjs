import {faCircle,faStar,faCircleCheck , faTrashCan} from '@fortawesome/free-regular-svg-icons';
import{faStar as faStarSolid , faTrashCan as faTrashCanSolid} from "@fortawesome/free-solid-svg-icons";
import '../Todo.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {addToDo , toggleToDo ,toggleImportant , removeToDo} from '../ToDoListSlice';
import { useSelector ,useDispatch} from 'react-redux';
import { useState } from 'react';
import audiofile from '../../assets/sounds/mixkit-bike-notification-bell-590.wav';

import autofileImp from '../../assets/sounds/bell-transition-141421.mp3';
import {setDelete , clearDelete} from '../deleteSlice';

const Task =({id , text ,completed ,color ='rgb(82, 82, 236)'})=>{

    
    const playAudio = () => {
        const audio = new Audio(audiofile);
        audio.volume =0.3;
        audio.play();
    };

  

    const playAudioImp = () => {
        const audio = new Audio(autofileImp);
        audio.volume =0.3;
        audio.play();
    };

    const deleteSelect = useSelector((state) => state.deleteItem.id);

    const toDoList = useSelector((state) => state.todolist.todos);

    const dispatch = useDispatch();

    const [hover ,setHover] =useState(false);

    const [hoverI ,setHoverI] =useState(false);

    const [hoverD ,setHoverD] =useState(false);

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
           
            <button  style={{color:color}} 

            onClick={()=>{
                dispatch(setDelete(id));
                //dispatch(removeToDo(id))
               // playAudioDel();

            }} onMouseEnter={()=>{setHoverD(true)}}  

            onMouseLeave={()=>{setHoverD(false)}}  className='task-todo-star'>
                
            <FontAwesomeIcon icon={faTrashCanSolid} style={{display  : `${ hoverD ? 'block' : 'none'} `}}  />
            <FontAwesomeIcon style={{display  : `${ hoverD ? 'none' : 'block'} `}} icon={faTrashCan} />

            </button> 

            <button  style={{color:color}} 
            onClick={()=>{
                if(!imp){
                    playAudioImp();
                }
                dispatch(toggleImportant(id))
                
            }}

             onMouseEnter={()=>{setHoverI(true)}}  onMouseLeave={()=>{setHoverI(false)}} className='task-todo-star'>

            <FontAwesomeIcon icon={faStarSolid}  style={{display  : `${imp || hoverI ? 'block' : 'none'} `}}  />

            <FontAwesomeIcon style={{display  : `${imp || hoverI ? 'none' : 'block'} `}} icon={faStar} />
            
            </button>
    
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

            <button  style={{color:color}} 

            onClick={()=>{
                
                dispatch(setDelete(id));

            }} onMouseEnter={()=>{setHoverD(true)}}  

            onMouseLeave={()=>{setHoverD(false)}}  className='task-todo-star'>
                
            <FontAwesomeIcon icon={faTrashCanSolid} style={{display  : `${ hoverD ? 'block' : 'none'} `}}  />
            <FontAwesomeIcon style={{display  : `${ hoverD ? 'none' : 'block'} `}} icon={faTrashCan} />

            </button>

            <button style={{color:color}} onClick={()=>{
                if(!imp){
                    playAudioImp();
                }
                dispatch(toggleImportant(id))
            
            }} onMouseEnter={()=>{setHoverI(true)}}  onMouseLeave={()=>{setHoverI(false)}}  className='task-todo-star'><FontAwesomeIcon icon={faStarSolid}  style={{display  : `${imp || hoverI ? 'block' : 'none'} `}}  /><FontAwesomeIcon style={{display  : `${imp || hoverI ? 'none' : 'block'} `}} icon={faStar} /></button>
    
            </div>
            </>
        )
        }

   
   
}

export default Task;