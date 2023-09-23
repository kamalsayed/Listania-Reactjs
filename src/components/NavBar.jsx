import React, { createContext, useState } from "react";
import './NavBar.css';
import { ActivePage } from "../App";





const NavBar = () => {
    const {activePage , setActivePage} = React.useContext(ActivePage);
    return(
        <>
       
        <div className="navdiv">
            <ul className="navbar">

                <li className="nav-item">
                <a id="Home" onClick={()=>{
                    setActivePage('Home');
                }} 
                className={`nav-link ${activePage =='Home'? 'active' : '' }`} href="#">Home</a>

                </li>

                <li  className="nav-item">

                <a id="To-Do"onClick={()=>{
                    setActivePage('To-Do');
                }} className={`nav-link ${activePage =='To-Do'? 'active' : '' }`}href="#">To Do</a>
                </li>
                
                <li className="nav-item">
                    <a id="Done" onClick={()=>{
                    setActivePage('Done');
                }} 
                className={`nav-link ${activePage =='Done'? 'active' : '' }`} href="#">Done</a>
                </li>

                <li className="reg-item">

                    <a id ="Register" onClick={()=>{
                    setActivePage('Register');
                }} className={`nav-link ${activePage =='Register'? 'active' : '' }`} href="#">Register</a>

                </li>
            </ul>
        </div>
        </>
    );

}


export default NavBar;