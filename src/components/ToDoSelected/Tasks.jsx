import { useSelector ,useDispatch} from 'react-redux';
import {changeOpen} from '../openCloseSlice';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSort ,faLayerGroup ,faPersonWalkingArrowLoopLeft} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb ,faCalendarDays,faBell,faCircle} from '@fortawesome/free-regular-svg-icons';
import Task from './Task';
import AddTask from './AddTask';
import {addToDo , toggleToDo} from '../ToDoListSlice';


const Tasks =()=>{
    const open = useSelector((state) => state.open.value);
    const toDoList = useSelector((state) => state.todolist.todos);
    const dispatch = useDispatch();
    return(
        <div className={`${open ? 'main-content' : 'main-content-closed'}`}>
        <div className="my-day">

            <div className='my-day-head'>
                <p style={{color:'rgb(194, 56, 56)'}} id='my-day-name'> Tasks</p>
                <div id='btn-my-day-cont'>
                
                <button style={{color:'rgb(194, 56, 56)'}} className='btn-my-day-left'><FontAwesomeIcon icon={faLayerGroup} /> Group</button>
                
                
                <button style={{color:'rgb(194, 56, 56)'}} className='btn-my-day-left'><FontAwesomeIcon icon={faSort} /> Sort</button>
                
                </div>
            </div>

            <AddTask color='rgb(194, 56, 56)' />

            <div>
                {toDoList.map((toDo)=>(
                    <Task key={toDo.id} id={toDo.id} text={toDo.text} color='rgb(194, 56, 56)' />
                ))}

            </div>

            <div className='completed-tasks'>
                
                <h2>Completed</h2>
                {toDoList.map((toDo)=>(
                    <Task key={toDo.id} id={toDo.id} text={toDo.text} completed={true}  color='rgb(194, 56, 56)' />
                ))}

            </div>
           
        </div>
        </div>
        
    );
}
export default Tasks;