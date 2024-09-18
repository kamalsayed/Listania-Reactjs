import './Assigned.css';
import {removeToDo} from '../ToDoListSlice';
import { useDispatch , useSelector } from 'react-redux';
import {setDelete , clearDelete}  from '../deleteSlice';
import autofileDel from '../../assets/sounds/patear-tacho-de-basura-81334.mp3';
const DialogMsg =({msg})=>{
    const playAudioDel = () => {
        const audio = new Audio(autofileDel);
        audio.volume =0.3;
        audio.play();
    };

    const dispatch = useDispatch();
    const deleteSelect = useSelector((state) => state.deleteItem.id);
        return(
            <div className="dialog">
                <h2>Message !</h2>
                {!msg ? <p>Deleting this item is permanent. Are you sure you want to continue?</p> :<p> {msg}</p> }
                {!msg ? <button onClick={()=>{
                    dispatch(removeToDo(deleteSelect));
                    dispatch(clearDelete());
                    playAudioDel();
                }} id='yes'>Yes</button>  : <></>}
               
               {!msg ? <button onClick={()=>{dispatch(clearDelete())}}  id='no'>No</button>  : <button onClick={()=>{dispatch(clearDelete())}}  id='no'>Ok</button>} 
                

            </div>

        );
}
export default DialogMsg;