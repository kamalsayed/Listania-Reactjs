import React from "react";
import './NavBar.css';
import { ActivePage } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse , faListOl , faCheckDouble , faUserPlus} from "@fortawesome/free-solid-svg-icons";




const NavBar = () => {
    const {activePage , setActivePage} = React.useContext(ActivePage);
    return(
        <>
       
        <div className="navdiv">
            <ul className="navbar">

                <li className="reg-item">
                <a id="Home" onClick={()=>{
                    setActivePage('Home');
                }} 
                className={`nav-link ${activePage =='Home'? 'active' : '' }`} href="/#home"> <FontAwesomeIcon icon={faHouse}/> Listania</a>

                </li>
                <li className="nav-item">

                    <a id ="Register" onClick={()=>{
                    setActivePage('Register');
                }} className={`nav-link ${activePage =='Register'? 'active' : '' }`} href="/#reg"> <FontAwesomeIcon icon={faUserPlus} /> Register</a>

                </li>

                <li className="nav-item">
                    <a id="Done" onClick={()=>{
                    setActivePage('Done');
                }} 
                className={`nav-link ${activePage =='Done'? 'active' : '' }`} href="/#done"> <FontAwesomeIcon icon={faCheckDouble} /> Done</a>
                </li>

                <li  className="nav-item">

                <a id="To-Do"onClick={()=>{
                    setActivePage('To-Do');
                }} className={`nav-link ${activePage =='To-Do'? 'active' : '' }`}href="/#todo"> <FontAwesomeIcon icon={faListOl} /> To Do</a>
                </li>
                
                

                
            </ul>
        </div>
        </>
    );

}


export default NavBar;