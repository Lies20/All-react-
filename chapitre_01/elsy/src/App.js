import React from "react";
import './App.css';
import './Styles/global.css'
import { Box } from './components/Box';

const tempMin = 20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
		
		constructor(props) {
				super(props);
				this.state = {
					water : 80,
					heart : 129,
					temperature : -12,
					steps : 600,
				}
				
			}
			
			 onHeartChange = (e) =>{
				this.setState({
					heart :e.target.value
					
				})
				
			}

		render() {
				return (
		      <div className="container-fluid">
		        <div className="row">
					
		            {/* Water */}
		            <Box icon="local_drink" value={this.state.water} unit="L" color="#3A85FF" />
		            {/* Steps */}
		            <Box icon="directions_walk" value={this.state.steps} unit="steps" color="black" onChange={this.onHeartChange} />
		            
		            {/* Heart */}
		            <Box icon="favorite" value={this.state.heart} unit="bpm" color="red" min={heartMin} max={heartMax} onChange={this.onHeartChange}/>
		            
		            {/* Temperatur */}
		            <Box icon="wb_sunny" value={this.state.temperature} unit="°C" color="yellow" onChange={this.onHeartChange} />
		        </div>
		      </div>
		    );
    }
}
export default App;
