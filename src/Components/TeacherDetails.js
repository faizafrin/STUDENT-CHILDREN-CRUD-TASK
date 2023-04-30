import React, { useState } from "react";
import { useHistory } from "react-router dom";
import BaseApp from "../core/Base";
//import UserComponent from "./UserComponent";

export default function Teacher({user,setUser}){
    const history = useHistory()
    const[name,setName] = useState("");
    const[id,setId] = useState("");
    const[email,setEmail] = useState("");
    const[experience,setExperience] = useState("");
    const[batch,setBatch] = useState("");
    //const [clr,setClr]= useState("");
    const addNew = ()=>{
        const newUser={
            id,
            name,
            email,
            batch,
            experience
        };
        console.log(newUser)
        
        setUser([...user, newUser]);
        history.push("/teacher/details")
        setName("");
        setBatch("");
        setEmail("");
        setExperience("");
        setId("");
    }
    return(
        <BaseApp
        title="Add  New Teacher"
        styles="title">
     <div className="input-value">

            <input
             placeholder="id"
             value={id}
             type="text"
             onChange={(event)=>setId(event.target.value)}/>
            <input 
            value={name}
            placeholder="name "
            type="text"
            onChange={(event)=>setName(event.target.value)}/>
            <input 
            value={email}
            placeholder="email"
            type="text"
            onChange={(event)=>setEmail(event.target.value)}/>
            
           
            <input 
            value={experience}
            placeholder="experience"
            type="number"
            onChange={(event)=>setExperience(event.target.value)}/>
            <input 
            value={batch}
            placeholder="batch"
            type="text"
            onChange={(event)=>setBatch(event.target.value)}/>
      
      
         
            
           
            <button className="add-btn"
            onClick={addNew}
            >Add</button>


    
     </div>
     </BaseApp>

    )
}