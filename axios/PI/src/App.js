import React from "react";
import axios from "axios";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			pi: null,
		}
	}
	componentDidMount=()=>{
		axios.get("https://api.pi.delivery/v1/pi?start=0&numberOfDigits=100").then((resultat)=>{
			console.log("resultat:" , resultat);
			console.log("Data:", resultat.data);
			if(resultat.data.content[0] == 3){
				var array = resultat.data.content.split('')
				array.splice(1,0,",")
				var array2 = array.join('')
				this.setState({
					pi : array2
				})
			}else{
				this.setState({
					pi : resultat.data.content
				})
			}

		})

	}

	render(){
		if (this.state.pi=== null) {
		<h2>aucune valeur disponible</h2>
	}
		return (
			<>
				<h1>{this.state.pi}</h1>
				
			</>
		)
	}
}

export default Home;