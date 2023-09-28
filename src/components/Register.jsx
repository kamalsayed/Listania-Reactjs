import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faRightToBracket ,faL} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Register = ()=>{
    const [name ,setName] =useState('');
    const [mail,setMail] =useState('');
    const [password ,setPassword] =useState('')

    const handleName =(event)=>{
        setName(event.target.value);
    }

    const handleMail =(event)=>{
        setMail(event.target.value);
    }
    const handlePassword =(event)=>{
        setPassword(event.target.value);
    }
    return(
        <>
        <form spellCheck="false" className="reg-container">
        <h2> <FontAwesomeIcon icon={faL} style={{color: "#1f64db",marginRight:2}} />istania</h2>
            <input onChange={handleName} value={name} type="text" placeholder="Name"  /> 
            <input onChange={handleMail} value={mail} type="text" placeholder="Email"  />      
            <input onChange={handlePassword} value={password} type="password" placeholder="Password"  />      

            <button
            onClick={()=>{


                
            }}
            
            
            >Register <FontAwesomeIcon icon={faRightToBracket} /></button>

        </form>
        </>
    );

}

export default Register;