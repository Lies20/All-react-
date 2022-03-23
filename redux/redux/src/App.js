import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import Task from './components/Task';

function App() {
  return (
    <h1>
        hello world
        <p><TaskList/></p>
        <p><Task/></p>
    </h1>
  );
}

export default App;
