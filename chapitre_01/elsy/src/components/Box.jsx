import React from "react";



export class Box extends React.Component {
    render() {
    let input = ""
        if(this.props.icon !== "local_drink"){
            input= <input type="range" min={this.props.min} max ={this.props.max} value={this.props.value} onChange={this.props.onChange}/>
        }
        console.log(this.props.min)
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{fontSize: "100px", color: this.props.color}}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
                        {input}
            </div>
        );
    }
}