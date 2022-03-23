import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <>
        <header>
          <nav>
              <Link className='buttonHome' to="/">home</Link>
              <Link className='buttonLogin' to="/login">login</Link>
          </nav>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login/>}/>
            </Routes>
          </div>
        </header>
        <h1>
          hello world
          <Login />
          <Home />
        </h1>
    </>
  );
}

export default App;
