import { useSelector ,useDispatch} from 'react-redux';
import {changeOpen} from '../openCloseSlice';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSort ,faLayerGroup ,faPersonWalkingArrowLoopLeft} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb ,faCalendarDays,faBell,faCircle} from '@fortawesome/free-regular-svg-icons';
import Task from './Task';
import AddTask from './AddTask';
import {addToDo , toggleToDo} from '../ToDoListSlice';
import assignedTask from '../../assets/assignedtasks.png';
import './Assigned.css';
const AssignedTasks =()=>{
    
    const open = useSelector((state) => state.open.value);
    const toDoList = useSelector((state) => state.todolist.todos);
    const dispatch = useDispatch();
    return(
        <div className={`${open ? 'main-content' : 'main-content-closed'}`}>
            <div className="my-day">

            <div className='my-day-head'>
                <p id='my-day-name'>AssignedTasks</p>
                
            </div>

           

            <div className='mid-page-container'>
                
              <img src={assignedTask} />
              <p>Tasks assigned to you in To Do or Planner show up here</p>
            </div>
        </div>
        </div>
        
    );
    
}
export default AssignedTasks;