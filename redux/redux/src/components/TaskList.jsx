import React,{useContext} from "react";
import { TacheContext } from "../App";



export default function TaskList (){
    
    const tacheContext = useContext(TacheContext)
    console.log("test",tacheContext);

    
    return(
        <>
        <h1>Liste de tâches </h1>
        {tacheContext.taches.map((tache)=>{
            // console.log(tache)
            return(
                <div>
                    <h2>{tache.title}</h2>
                    <p>{tache.priority}</p>
                </div>
            )
        })}
        </>
        
    )
}