import { useSelector ,useDispatch} from 'react-redux';
import {selectSide} from './SelectedSideSlice';
import MyDay from './ToDoSelected/MyDay';
import Important from './ToDoSelected/Important';
import Planned from './ToDoSelected/Planned';
import AssignedTasks from './ToDoSelected/AssignedTasks';
import FlaggedEmail from './ToDoSelected/FlaggedEmail';
import Tasks from './ToDoSelected/Tasks';


const ToDoContent =({props})=>{
    const selected = useSelector((state) =>state.selectedSide.choice);
    switch(selected){
        case 'myday':
            return <MyDay/>
            break;
        case 'important':
            return <Important />
            break;
        case 'planned':
            return <Planned />
            break;
        case 'assigned':
            return <AssignedTasks />
            break;
        case 'flagged':
            return <FlaggedEmail />
            break;
        case 'tasks':
            return <Tasks />
            break;
        default:
            return <MyDay />
            break;
    }
    
    
    
}

export default ToDoContent;