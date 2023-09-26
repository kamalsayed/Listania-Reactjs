import './SideBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun , faStar ,faCalendarDays ,faUser ,faFlag ,faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {faListCheck ,faPlus ,faLayerGroup , faBars ,faUserGroup ,faPaperclip ,faCheck} from "@fortawesome/free-solid-svg-icons";
import { useSelector ,useDispatch} from 'react-redux';
import {changeOpen} from './openCloseSlice';
import {selectSide} from './SelectedSideSlice';
import { changeFocus } from "./addTaskSlice";
import {addToDo , toggleToDo ,toggleImportant} from './ToDoListSlice';

const SideBarContent=()=>{
    const open = useSelector((state) => state.open.value);
    const dispatch = useDispatch();
    const selected = useSelector((state) =>state.selectedSide.choice);
    const show = useSelector((state) => state.showTask.display);
    const toDoList = useSelector((state) => state.todolist.todos);

    const myDayCount =()=>{
        const mydayC = toDoList.filter((todo)=> (todo.completed === false && todo.important === true)||
        (todo.completed === false && todo.important === false)
        ).length;
        const importantC = toDoList.filter((todo)=> todo.completed === false && todo.important ===true).length;
        const tasksC = toDoList.filter((todo)=> (todo.completed === false && todo.important ===true)||
        (todo.completed === false && todo.important ===false)
        ).length;
        console.log(mydayC)
        return {mydayC ,importantC ,tasksC};
    }
    
    const {mydayC ,importantC ,tasksC} = myDayCount();


    const toggleSideBar =()=>{
           dispatch(changeOpen());
    }
return(
    <div className="side-bar">
        <div className="side-bar-top">
            <button className='side-btn-top' onClick={()=>{
                toggleSideBar();
                if(show=='grid'){
                    dispatch(changeFocus());
                }
                
                }}><FontAwesomeIcon icon={faBars} /></button>
         </div>
        <div className='side-bar-content'>
            
        <a className={`side-bar-item ${selected =='myday'? 'selected' : '' }`} onClick={()=>{dispatch(selectSide('myday'))}} href="#"> 

            <p>

            <FontAwesomeIcon className='content-icon' icon={faSun} /> My Day 
           

            </p>
            <div className="side-bar-count"> <p> {mydayC > 0 ? mydayC : ''} </p> </div>
        </a>

        <a className={`side-bar-item ${selected =='important'? 'selected' : '' }`} onClick={()=>{dispatch(selectSide('important'))}} href="#">

            <p>

            <FontAwesomeIcon  className='content-icon'icon={faStar} /> Important </p>
            <div className="side-bar-count"> <p> {importantC > 0 ? importantC : ''} </p> </div>   
        </a>

        <a className={`side-bar-item ${selected =='planned'? 'selected' : '' }`} onClick={()=>{dispatch(selectSide('planned'))}} href="#">
            
            <p>
                
            <FontAwesomeIcon className='content-icon' icon={faCalendarDays} /> Planned</p>

        </a>

        <a className={`side-bar-item ${selected =='assigned'? 'selected' : '' }`} onClick={()=>{dispatch(selectSide('assigned'))}} href="#">
            
            <p>
            <FontAwesomeIcon className='content-icon' icon={faUser} /> Assigned to me</p>

        </a>

        <a className={`side-bar-item ${selected =='flagged'? 'selected' : '' }`} onClick={()=>{dispatch(selectSide('flagged'))}} href="#">
            
            <p>
                
            <FontAwesomeIcon className='content-icon' icon={faFlag} /> Flagged email</p>
                
        </a>
        
        <a className={`side-bar-item ${selected =='tasks'? 'selected' : '' }`} onClick={()=>{dispatch(selectSide('tasks'))}} href="#">
            
            <p>
                
            <FontAwesomeIcon className='content-icon' icon={faListCheck} /> Tasks</p>
            <div className="side-bar-count"> <p> {tasksC > 0 ? tasksC : ''} </p> </div>  
                
        </a>


        <div className='side-bar-laststatic'></div>
            <div className='side-bar-mid'> 
                <div className='side-bar-addlist'>
                    <button id='side-btn-add'><FontAwesomeIcon icon={faPlus} /></button>
                    <input  id='side-new-list' type='text' placeholder='New List' />
                </div>
                <button id='side-btn-group'><FontAwesomeIcon icon={faLayerGroup} /></button>
            </div>
        </div>
            <div className="side-bar-bot">
            <a href='#'><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href='#'><FontAwesomeIcon icon={faCalendarDays} /></a>
            <a href='#'><FontAwesomeIcon icon={faUserGroup} /></a>
            <a href='#'><FontAwesomeIcon icon={faPaperclip} /></a>
            <a style={{color:'rgba(55, 55, 250,.9)'}} href='#'><FontAwesomeIcon icon={faCheck} /></a>
            </div>

        </div>
);


}


export default SideBarContent;