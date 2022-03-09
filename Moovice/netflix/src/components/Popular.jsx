import React from 'react';
import axios from 'axios';
import Card from './Card';


class Popular extends React.Component{
   constructor(){
        super();
        this.state={
            movies:[],
            title:'noMovie',
        }
        
    }

    componentDidMount = () => {
            axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=825a36f3e65668fc37a974814e8dc613").then((result) => {
                // console.log("result", result);
                // console.log('data', result.data.results[0]);        
                this.setState({
                    movies: result.data.results,
                })
                // console.log( 'les films sont',this.state.movies)

            })

            }
        
    
    




render(){console.log( '#render movie idx 0',this.state.movies[0])
        return(
            <div>
                <h1 >Popular</h1>
                {this.state.movies.map((movie)=>{
                   return <Card title={movie.title} date={movie.release_date} description={movie.overview} image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
                        
                })}
                <p></p>
            </div>
        )
    }

}
export default Popular;