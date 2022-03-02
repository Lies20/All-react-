import React from "react";
import axios from "axios";


class button extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<>
        <button>{this.props.children}</button>
        </>
        )
    }
}

export default button;