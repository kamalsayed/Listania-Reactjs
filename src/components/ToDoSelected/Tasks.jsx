import { useSelector ,useDispatch} from 'react-redux';
import {changeOpen} from '../openCloseSlice';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSort ,faLayerGroup ,faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb ,faCalendarDays,faBell,faCircle} from '@fortawesome/free-regular-svg-icons';
import Task from './Task';
import AddTask from './AddTask';
import {addToDo , toggleToDo} from '../ToDoListSlice';
import { useState } from 'react';


const Tasks =()=>{
    const open = useSelector((state) => state.open.value);
    const toDoList = useSelector((state) => state.todolist.todos);
    const dispatch = useDispatch();
    const [spread ,setSpread] =useState(false);
    const [rotation, setRotation] = useState(0);
    const myDayCount =()=>{
        const completedC = toDoList.filter((todo)=> (todo.completed === true )).length;
       
   
        return completedC;
    }
    const completedC =myDayCount();

  const handleClick = () => {
    if(rotation>0){
    setRotation(rotation - 90);
    }else{
        setRotation(rotation + 90);
    }
   
  };

    return(
        <div className={`${open ? 'main-content' : 'main-content-closed'}`}>
        <div className="my-day">

            <div className='my-day-head'>
                <p style={{color:'rgb(194, 56, 56)'}} id='my-day-name'> Tasks</p>
                <div id='btn-my-day-cont'>
                
                <button style={{color:'rgb(194, 56, 56)'}} className='btn-my-day-left'><FontAwesomeIcon icon={faLayerGroup} /> <span> Group</span></button>
                
                
                <button style={{color:'rgb(194, 56, 56)'}} className='btn-my-day-left'><FontAwesomeIcon icon={faSort} /> <span>Sort</span></button>
                
                </div>
            </div>

            <AddTask color='rgb(194, 56, 56)' />

            
                {toDoList.map((toDo)=>(
                    <Task key={toDo.id} id={toDo.id} text={toDo.text} color='rgb(194, 56, 56)' />
                ))}

            
             
            <div style={{display:`${completedC>0 ? 'flex' : 'none'}`}}  className='completed-tasks'>

                <button style={{ transform: `rotate(${rotation}deg)` }} onClick={()=>{
                    setSpread(!spread);
                    handleClick()
                }}><FontAwesomeIcon icon={faArrowRight}/></button>
                <h2>Completed</h2>
                <h2 id='completed-tasks-C'>{completedC}</h2>
                </div>    
                
                {
                spread ?
                toDoList.map((toDo)=>(
                    <Task key={toDo.id} id={toDo.id} text={toDo.text} completed={true}  color='rgb(194, 56, 56)' />
                ))
                :
                <>
                <div style={{display:`${completedC>0 ? 'block' : 'none'}`}} id='hr-div'></div>
                </>
                
                }

                
                

                
            
            
           
           
            </div>

        </div>
        
    );
}
export default Tasks;