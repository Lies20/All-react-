import './App.css';
import React from 'react';


import Produit from './component/Produit';
import Home from './component/home';
import Produits from './component/Produits';
import { Route, Routes, Link } from 'react-router-dom';


class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <header>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/products">Produits</Link>
              <Link to ="/Produit">En savoir plus</Link>
            </nav>

        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Produits/>}/>
          <Route path ="/Produit" element={<Produit/>}/>
        </Routes>
      </div>
    )
  }
}

export default App ;
