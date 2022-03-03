import React from "react";
import axios from "axios";
import "./App.css";


class App extends React.Component{
  constructor(){
    super()
    this.state={
      pokemon :[],
    }
  }
  componentDidMount=()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon").then((result)=>{
      // console.log("resultat:" , result);
      console.log("name Of pokemon is ", result.data.results);
      this.setState({
        pokemon :result.data.results,
      })
      console.log("la valeur de pokémon est", this.state.pokemon)
    })
  }
  getPoke=(pokemon)=>{
    axios.get("https://pokeapi.co/api/v2/pokemon"+ pokemon).then((result)=>{
      console.log("resultat:", result);
      console.log("data:", result);
    })
  }
  
  
  render(){
// this.getPoke("pikachu")
console.log(this.state.pokemon);
  return(
    <div className="button">
      <input placeholder="Enter a pokemon name.."/>
      <button type="submit">Search</button>
      <h1>{this.state.pokemon.map(pokemon=>{
        return <p className="listOfPokemon">{pokemon.name}</p>
      })}</h1>
     </div>
  )
    
  }
}

export default App;
