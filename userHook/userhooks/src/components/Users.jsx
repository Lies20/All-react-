import React, { useEffect, useState } from "react";
import axios from "axios";
import UserInfo from './UserInfo';


 export default function Users(){
    const [users,setUsers] =useState([]);
    const url =  "https://jsonplaceholder.typicode.com/users";
    useEffect(()=>{
        axios.get(url).then((result)=>{
            console.log( "resultat", result);
            console.log("data", result.data);
            setUsers(result.data)
        })
    }, [])
    return(
        <>
        {
            users.map(user=>{
                return  <UserInfo data={user}/>
               
            })
        }
        
        </>
    )
    

}