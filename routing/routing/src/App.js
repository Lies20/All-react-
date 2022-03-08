import './App.css';
import React from 'react';



import Home from './component/home';
import Produits from './component/Produits';
import { Route, Routes } from 'react-router-dom';


class App extends React.Component{
  render(){
    return(
      <div className='App'>
        {/* <Produits></Produits>
        <Home></Home> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Produits/>}/>

        </Routes>
      </div>
    )
  }
}

export default App ;
