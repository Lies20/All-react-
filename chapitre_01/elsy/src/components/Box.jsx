import React from "react";



 export function Box(props) {
    return (
      <div className="box col-sm-3 col-6">
          <span className="material-icons"style={{color:props.color , fontSize : 100}} >{props.icon}</span>
            <p>{props.value} {props.unit}</p>
      </div>
         
    )
}