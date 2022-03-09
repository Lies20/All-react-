import React from "react";

class Card extends React.Component{
    



    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.date}</h1>
                <h1>{this.props.description}</h1>
                <img src= {this.props.image}/>
                
            </div>
        )
    }
}
export default Card;
