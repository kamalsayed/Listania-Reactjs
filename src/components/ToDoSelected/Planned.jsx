import { useSelector ,useDispatch} from 'react-redux';
import {changeOpen} from '../openCloseSlice';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSort ,faLayerGroup ,faPersonWalkingArrowLoopLeft} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb ,faCalendarDays,faBell,faCircle} from '@fortawesome/free-regular-svg-icons';
import Task from './Task';
import AddTask from './AddTask';
import {addToDo , toggleToDo} from '../ToDoListSlice';

const Planned =()=>{
    
    const open = useSelector((state) => state.open.value);
    const toDoList = useSelector((state) => state.todolist.todos);
    const dispatch = useDispatch();
    return(
        <div className={`${open ? 'main-content' : 'main-content-closed'}`}>
            <div className="my-day">

            <div className='my-day-head'>
                <p id='my-day-name'>Planned</p>
                <div id='btn-my-day-cont'>

                
                <button className='btn-my-day-left'><FontAwesomeIcon icon={faSort} /> <span> Sort </span></button>
                
                </div>
            </div>

            <AddTask important={true}/>

            <div>
                {toDoList.map((toDo)=>(

                   <Task key={toDo.id} id={toDo.id} text={toDo.text} />
                   
                    
                ))}

            </div>
        </div>
        </div>
        
    );
    
}
export default Planned;