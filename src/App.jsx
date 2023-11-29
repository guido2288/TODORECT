import {  useState } from "react"
import Toogle from "./components/Toogle";
import { RandomId } from "./logic/idGenerator";
import TodosList from "./components/TodosList";
import TodosFilters from "./components/TodosFilters";

function App() {

  const [theme, setTheme] = useState('dark');
  const [todos, setTodos] = useState([]);
  const [filterTodo, setFilterTodo] = useState('all');

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

  const handleCompleteTodo = (todo) => {
    
    const newsTodos = [];

    todos.forEach(element => {
      if(element.id === todo.id){
        if(todo.completed){
          let newTodo = {
            id: todo.id,
            title: todo.title,
            active: true,
            completed: false
          }
          newsTodos.push(newTodo)
        }else{
          let newTodo = {
            id: todo.id,
            title: todo.title,
            active: true,
            completed: true
          }
          newsTodos.push(newTodo)
        }
        
      }else{
        newsTodos.push(element)
      }

      setTodos(newsTodos);
    });

  };

  const handleDeleteTodo = (todo)=> {

    const newTodos = todos.filter( element => todo.id !== element.id);

    setTodos(newTodos);

  };

  const handleClearCompletedTodo = () => {
    const newTodos = todos.filter( element => element.completed == false);

    setTodos(newTodos)
  };

  return (
    <main className={`main_container ${theme}`}>
      <header className={`head_container ${theme}`} >

        <Toogle theme={theme} toogleTheme={toogleTheme}/>

          <form action="submit" onSubmit={submitHandler}>
            
            <input className={`${theme}`} type="text" placeholder="Create a new todo..."  name="addTodo"/>
           
          </form>
      </header>

      <TodosList theme={theme} todos={todos} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} handleClearCompletedTodo={handleClearCompletedTodo}/>

      <TodosFilters theme={theme} filterTodo={filterTodo} setFilterTodo={setFilterTodo}/>

    </main>

  )
}

export default App
