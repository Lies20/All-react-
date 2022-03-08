import React from "react";
import axios from "axios" ;




class Produits extends React.Component{
   constructor(){
       super();
       this.state={
           products:[],
        }

    }
    componentDidMount = () =>{
        axios.get("https://fakestoreapi.com/products/").then((result)=>{
            console.log("result", result);
            console.log('data', result.data);
            this.setState({
                products:result.data,
            })
    
}
)
    
    
        
   }


   
   
    render(){
        return(
            <div>
               {this.state.products.map((product)=>
                <p>
                    {product.title}
                </p>)}
            </div>
        )
    }
}

export default Produits;