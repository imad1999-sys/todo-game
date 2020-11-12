import logo from './logo.svg';
import './App.css';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
