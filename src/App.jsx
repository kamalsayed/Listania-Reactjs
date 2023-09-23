import React from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";


export const ActivePage = React.createContext();

export const ActiveProvider = ({children})=>{
  const [activePage , setActivePage] =useState('Register');
  return (
    <ActivePage.Provider value={{activePage ,setActivePage}}>
      {children}
    </ActivePage.Provider>
  );

}



function App() {
  
  
 
  return (
    <>
      <div>
      <ActiveProvider>
        <NavBar />
       
      </ActiveProvider>  
          
        
      </div>
    </>
  )
}

export default App
