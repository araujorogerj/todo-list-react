import './App.css';
import TodoList from "./components/todoList";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='todo-list'>
      <TodoList />
      </div>      
    </div>
  );
}

export default App;
