import bootstrap from 'bootstrap'
import React from 'react'
import {Routes,Route, Link,} from 'react-router-dom';
import Home from '../src/components/Home';
import Favorites from './components/Favorites';
import Popular from './components/Popular';
import PopularBattle from './components/Popular-battle';
import WeeklyBattle from './components/Weekly-battle';
import Weekly from './components/Weekly'


class App extends React.Component{





  render(){
    return(
      <header>
        <nav>
        <Link to="/">Home</Link>
        {/* <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link> */}
        </nav>
        <h1>Hello world</h1>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Favorites' element={<Favorites/>}/>
            <Route path='/PopularBattle' element={<PopularBattle/>}/>
            <Route path='/Popular' element={<Popular/>}/>
            <Route path='/WeeklyBattle' element={<WeeklyBattle/>}/>
            <Route path='/Weekly' element={<Weekly/>}/>
        </Routes>
      </header>
    )
  }
}

export default App;