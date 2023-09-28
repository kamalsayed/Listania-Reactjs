import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faRightToBracket ,faL} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DialogMsg from "./ToDoSelected/dialogMsg";
import { useDispatch , useSelector } from 'react-redux';
import {setDelete , clearDelete}  from './deleteSlice';

const Register = ()=>{
    const [name ,setName] =useState('');
    const [mail,setMail] =useState('');
    const [password ,setPassword] =useState('');
    const [validN ,setValidN] =useState(false);
    const [validE ,setValidE] =useState(false);
    const [validP ,setValidP] =useState(false);
    const [triger ,setTriger] =useState(false);
    const dispatch = useDispatch();
    const handleName =(event)=>{
        setName(event.target.value);
    }

    const handleMail =(event)=>{
        setMail(event.target.value);
    }
    const handlePassword =(event)=>{
        setPassword(event.target.value);
    }

    function validateName(name) {
        // Check if the name is empty
        if (name === "") {
          return false;
        }
      
        // Check if the name contains only letters, numbers, spaces, and hyphens
        const regex = /^[a-zA-Z0-9\- ]+$/;
        if (!regex.test(name)) {
          return false;
        }
      
        return true;
      }

    function validateEmail(email) {
        // Check if the email is empty
        if (email === "") {
          return false;
        }
      
        // Check if the email is in a valid format
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(email)) {
          return false;
        }
        return true;
      }

      function validatePassword(password) {
        // Check if the password is empty
         if (password === "") {
         return false;
        }

            // Check if the password is at least 8 characters long
             if (password.length < 8) {
             return false;
        }
        /*
            // Check if the password contains at least one uppercase letter, one lowercase letter, one number, and one special character
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})$/;
             if (!regex.test(password)) {
             return false;
            }
            */

             return true;
                }











    return(
        <>
        <div id='reg-div'>
        <form spellCheck="false" className="reg-container">
        <h2> <FontAwesomeIcon icon={faL} style={{color: "#1f64db",marginRight:2}} />istania</h2>
            <input id="reg-name" onBlur={()=>{
                if(validateName(name)){
                    setValidN(true);
                }else{
                    setValidN(false);
                }
                console.log(validN);
                
            
            }} onChange={handleName} value={name} type="text" placeholder="Name"  /> 

            {!validN ? <p className="err-msg">* please enter valid name *</p> : ''}
            <input onBlur={()=>{
                if(validateEmail(mail)){

                    setValidE(true);
                }else{
                    setValidE(false);
                }
                //console.log(validE);
            
            }} onChange={handleMail} value={mail} type="text" placeholder="Email"  />    

                {!validE ? <p className="err-msg">* please enter valid Email *</p> : ''}

            <input onBlur={()=>{
                if(validatePassword(password)){
                    setValidP(true);
                   
                }else{
                    setValidP(false);
                    console.log(password);
                }
               
                
            
            }} onChange={handlePassword} value={password} type="password" placeholder="Password"  />     

            {!validP ? <p className="err-msg">* please enter valid Password *</p> : ''}

            <button
            onClick={()=>{
                if(validE && validN && validP){
                   setTriger(true);
                   dispatch(setDelete('xyz'));   
                    setValidE(false);
                    setValidN(false);
                    setValidP(false);
                }

                
            }}
            
            
            >Register <FontAwesomeIcon icon={faRightToBracket} /></button>

        </form>

            
        </div>
        </>
    );

}

export default Register;