import React from 'react';
import user from "./users.json"


let users =user.map(function(info){
  console.log(info.website)
  return(

    <p>{info.name} {info.website} {info.email}</p>
  )
  
  
} )


class App extends React.Component{
  constructor(props){
    super(props)
     this.state ={
       users:users
     }
     console.log(this.state.users)
  }
  
  
  render(){
    return(
      <div>
        {this.state.users}
      </div>
    )
  }
}
export default App;




