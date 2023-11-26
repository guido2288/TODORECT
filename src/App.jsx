import {  useState } from "react"
import Toogle from "./components/Toogle";
import { RandomId } from "./logic/idGenerator";
import TodosList from "./components/TodosList";

function App() {

  const [theme, setTheme] = useState('dark');
  const [todos, setTodos] = useState([]);

  const toogleTheme = () => {
    setTheme( (current) => (current === 'light' ? 'dark': 'light') );
  };

  const submitHandler = (event) => {
    event.preventDefault()
    const newTodo = {
      id: RandomId(),
      title: event.target.addTodo.value,
      active: true,
      completed: false
    }

    setTodos([...todos, newTodo]);
  };

  

  return (
    <main className={`main_container ${theme}`}>
      <header className={`head_container ${theme}`} >

        <Toogle theme={theme} toogleTheme={toogleTheme}/>

          <form action="submit" onSubmit={submitHandler}>
            
            <input className={`${theme}`} type="text" placeholder="Create a new todo..."  name="addTodo"/>
           
          </form>
      </header>

      <TodosList theme={theme} todos={todos}/>


      <footer>
        <div className={`btn-container ${theme}`}>
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <p>Drag and drop to reorder list</p>
      </footer>
    </main>

  )
}

export default App
