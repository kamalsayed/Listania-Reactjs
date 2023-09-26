import './SideBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector ,useDispatch} from 'react-redux';
import {changeOpen} from './openCloseSlice';
import SideBarContent from './SideBarContent';
import { changeFocus } from "./addTaskSlice";


const SideBar = ()=>{
    const open = useSelector((state) => state.open.value);
    const show = useSelector((state) => state.showTask.display);

    const dispatch = useDispatch();

  




    const toggleSideBar =()=>{
           dispatch(changeOpen());
    }

    if(open){
        return(
            <SideBarContent  />
        );
    }
    else{
        return(
            <div className="closed">
            <div className="side-bar-top">
            <button className='side-btn-top' onClick={()=>{
               if(show=='grid'){
                dispatch(changeFocus());
              }
                toggleSideBar();

                
                }}><FontAwesomeIcon icon={faBars} /></button>
            </div>
            </div>
        
        
        );
    }
    
  

}

export default SideBar;