import React from "react";
import axios from "axios";




class Produits extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
        }

    }
    componentDidMount = () => {
        axios.get("https://fakestoreapi.com/products/").then((result) => {
            console.log("result", result);
            console.log('data', result.data);
            this.setState({
                products: result.data,
            })

        }
        )



    }




    render() {
        return(
            <>
                {this.state.products.map(product => {

                    return (

                        <div>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <img src={product.image} height="150px"/>
                        </div>
                    )
                }
                
                
                
                )      
                
            }
            </>)}
}

export default Produits;