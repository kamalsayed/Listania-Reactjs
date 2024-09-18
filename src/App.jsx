import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ToDo from "./components/Todo";
import Done from "./components/Done";
import Register from "./components/Register";
import { useState } from "react";
import {selectSide} from './components/SelectedSideSlice';

import { useSelector ,useDispatch} from 'react-redux';


export const ActivePage = React.createContext();

export const ActiveProvider = ({children})=>{
  const [activePage , setActivePage] =useState('Home');
  return (
    <ActivePage.Provider value={{activePage ,setActivePage}}>
      {children}
    </ActivePage.Provider>
  );

}

export const PageContainer = ()=>{
  const {activePage , setActivePage} = React.useContext(ActivePage);
  const selected = useSelector((state) =>state.selectedSide.choice);
  const dispatch = useDispatch();
  
    useEffect(() => {
    if(activePage =='Done'){
    if (selected !== 'tasks') {
      dispatch(selectSide('tasks'));
    }
    }
    }, [activePage]);

      return(
      activePage == 'Home' ? <Home /> :
      activePage == 'To-Do' ? <ToDo /> :
      activePage == 'Done' ? <ToDo  />  :
      <Register />
      )
      
  }

export const ToDoContext = React.createContext();

export const ToDoProvider =({children})=>{
  const [ToDo , setToDo] =useState([]);
  const [Done , setDone]=useState([]);
  return(
    <ToDoContext.Provider value={{ToDo,setToDo,Done,setDone}}>
      {children}
    </ToDoContext.Provider>
  )

}





function App() {
   
  return (
    <>
    
      <ActiveProvider>
        <NavBar />

      <ToDoProvider>

      <PageContainer />
      
      </ToDoProvider>

      </ActiveProvider>  
          
        
      
    </>
  )
}

export default App;
