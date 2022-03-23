import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import Task from './components/Task';
import { useState } from 'react';
import React from 'react';

export const TacheContext =React.createContext();

function App() {
  const [taches,setTaches]=useState([

    { id: 1, title: 'Tache 01', priority: 'Important'},        
    { id: 2, title: 'Tache 02', priority: 'Urgent'}   
  ])
    
  return (
    <TacheContext.Provider value={{taches,setTaches}}>
    <h1>
        hello world
        <TaskList/>
        <Task/>
    </h1>
    </TacheContext.Provider>
  );
}

export default App;
