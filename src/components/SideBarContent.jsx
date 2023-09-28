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
            
        <a className={`side-bar-item`} onClick={()=>{dispatch(selectSide('myday'))}} href="#"> 

            <p className={`${selected =='myday'? 'selected' : '' }`}>

            <FontAwesomeIcon className='content-icon' icon={faSun} /> <span> My Day </span>
           

            </p>
            <div className="side-bar-count"> <p> {mydayC > 0 ? mydayC : ''} </p> </div>
        </a>

        <a className={`side-bar-item`} onClick={()=>{dispatch(selectSide('important'))}} href="#">

            <p className={`${selected =='important'? 'selected' : '' }`}>

            <FontAwesomeIcon  className='content-icon'icon={faStar} /> <span> Important </span> </p>
            <div className="side-bar-count"> <p> {importantC > 0 ? importantC : ''} </p> </div>   
        </a>

        <a className={`side-bar-item`} onClick={()=>{dispatch(selectSide('planned'))}} href="#">
            
            <p className={`${selected =='planned'? 'selected' : '' }`}>
                
            <FontAwesomeIcon className='content-icon' icon={faCalendarDays} /> <span>Planned</span> </p>

        </a>

        <a className={`side-bar-item`} onClick={()=>{dispatch(selectSide('assigned'))}} href="#">
            
            <p className={ `${selected =='assigned'? 'selected' : '' } `}> 
            <FontAwesomeIcon className='content-icon' icon={faUser} /> <span> Assigned to me</span></p>

        </a>

        <a className={`side-bar-item`} onClick={()=>{dispatch(selectSide('flagged'))}} href="#">
            
            <p className={`${selected =='flagged'? 'selected' : '' }`}>
                
            <FontAwesomeIcon className='content-icon' icon={faFlag} />  <span> Flagged email </span></p>
                
        </a>
        
        <a className={`side-bar-item`} onClick={()=>{dispatch(selectSide('tasks'))}} href="#">
            
            <p className={`${selected =='tasks'? 'selected' : '' }`}>
                
            <FontAwesomeIcon className='content-icon' icon={faListCheck} /> <span>  Tasks </span></p>
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
            <a id='bot-1' href='#'><FontAwesomeIcon icon={faEnvelope} /></a>
            <a  id='bot-2' href='#'><FontAwesomeIcon icon={faCalendarDays} /></a>
            <a id='bot-3' href='#'><FontAwesomeIcon icon={faUserGroup} /></a>
            <a  id='bot-4' href='#'><FontAwesomeIcon icon={faPaperclip} /></a>
            <a id='bot-5'  style={{color:'rgba(55, 55, 250,.9)'}} href='#'><FontAwesomeIcon icon={faCheck} /></a>
            </div>

        </div>
);


}


export default SideBarContent;