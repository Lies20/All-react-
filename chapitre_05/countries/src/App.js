import React from "react";
import axios from "axios";
import Button from "./components/buttons";

class App extends React.Component{
  constructor(){
    super()
    this.state={
      name :"",
      capital:"",
      flag:"",
      population:"",
      region:"",
    }
  }
  componentDidMount=()=>{
    axios.get("https://restcountries.com/v3.1/name/france").then((resultat)=>{
      console.log("resultat:" , resultat);
      console.log("data", resultat.data[0].capital[0]);
      this.setState({
        capital:resultat.data[0].capital[0],
        name: resultat.data[0].name.common,
        population: resultat.data[0].population,
        region : resultat.data[0].region,
        flag : resultat.data[0].flag,
        
      })
      // console.log(this.state.capital)
      // console.log(this.state.name)
      // console.log(this.state.population)
      // console.log(this.state.region)
      // console.log(this.state.flag)
    })
  }
  
  



render(){
  
  return(
    <>
    <h1>
      {this.state.capital} 
      {this.state.flag} 
      {this.state.population}
      {this.state.region} 
      {this.state.name}
     </h1>
     <h2>
       <Button>Brasil</Button>
       <Button>Croatia</Button>
       <Button>france</Button>
     </h2>
     </>
  )
  }
}

export default App;