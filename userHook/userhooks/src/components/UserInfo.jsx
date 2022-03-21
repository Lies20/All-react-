import React from "react";



 export default function UserInfo(props) {
     console.log(props.data.name)
    return(
        <>
        <h2>
             {props.data.name}
        </h2>
        <p>{props.data.email}</p>
        <p>{props.data.website}</p>
        </>
    )
}