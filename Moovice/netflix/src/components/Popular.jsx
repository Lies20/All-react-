import React from 'react';
import axios from 'axios';


class Popular extends React.Component{
   constructor(){
        super();
        this.state={
            Movies:[],
        }
    }

    componentDidMount = () => {
            axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=825a36f3e65668fc37a974814e8dc613").then((result) => {
                console.log("result", result);
                console.log('data', result.data.results[0]);        
                this.setState({
                    Movies: result.data.results,
                })
                console.log( 'les films sont',this.state.Movies)

            })
            }
        
    
    




render(){
        return(
            <h1>Popular</h1>
        )
    }

}
export default Popular;