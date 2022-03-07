import React from "react";
import axios from "axios";
import "./App.css";


class App extends React.Component{
  constructor(){
    super()
    this.state={
      pokemon :[],
      pokePictures:[],
    }
  }
  componentDidMount=()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon").then((result)=>{
      // console.log("resultat:" , result);
      console.log("name Of pokemon is ", result.data.results);
      result.data.results.map(pokemon =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(resultat=>{
          // console.log("l'image est ",resultat.data.sprites.front_default)
        var array = this.state.pokePictures
        array.push(resultat.data.sprites.front_default)
         this.setState({
          pokePictures: array,
         })
          console.log("les images sont +", this.state.pokePictures);

        })
      })
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
    console.log( this.state.pokePictures)
// this.getPoke("pikachu")
console.log(this.state.pokemon);
  return(
    <div className="">
      <input placeholder="Enter a pokemon name.."/>
      <button type="submit">Search</button>
      <h1>{this.state.pokemon.map((pokemon, index)=>{
        return <div>
                  <img src={this.state.pokePictures[index]}/>
                  <p className="listOfPokemon">{pokemon.name}</p>
              </div>
      })}</h1>
     </div>
  )
    
  }
}

export default App;
