import React from "react";
import './App.css';
import { Box } from "./components/Box";
import './Styles/global.css'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax =100
const stepsMin = 0
const stepsMax = 50000

 export default function App() {
    return (
      <div class='container-fluid'>
          <div class='row'>
              <Box icon="directions_walk" ></Box>
              {/* boite water */}
              <Box icon ="local_drink" color = "#3A85FF" value = "1.5" unit = "L" ></Box> 
              {/* boites steps */}
               <Box icon="favorite" color="red" value="120" unit="bpm"></Box>
               {/* boite favorite */}
               <Box icon="wb_sunny" color="yellow" value="-10" unit="°C"></Box>
              <p> heart : {heartMin}</p>
              <p> temperature : {tempMin}</p>
              <p> steps : {stepsMin}</p>
          </div>
       
      </div>
    );
}
