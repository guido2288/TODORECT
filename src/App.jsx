import {  useState } from "react"
import Toogle from "./components/Toogle";
import TodosList from "./components/TodosList";
import TodosFilters from "./components/TodosFilters";
import { useTodos } from "./hooks/useTodos";

function App() {

  const [theme, setTheme] = useState('dark');
  const {todos , submitHandler , handleCompleteTodo , handleDeleteTodo , handleClearCompletedTodo} = useTodos();
  const [filterTodo, setFilterTodo] = useState('all');

  const toogleTheme = () => {
    setTheme( (current) => (current === 'light' ? 'dark': 'light') );
  };

  const handleChangeFilter =(change) => {
    setFilterTodo(change)
  }

  return (
    <main className={`main_container ${theme}`}>
      <header className={`head_container ${theme}`} >

        <Toogle theme={theme} toogleTheme={toogleTheme}/>

          <form action="submit" onSubmit={submitHandler}>
            
            <input className={`${theme}`} type="text" placeholder="Create a new todo..."  name="addTodo"/>
           
          </form>
      </header>

      {
        filterTodo == 'all' ? <TodosList theme={theme} todos={todos} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} handleClearCompletedTodo={handleClearCompletedTodo} itemsLeft={todos.filter(todo => !todo.completed).length}/>

        : filterTodo == 'active' ? <TodosList theme={theme} todos={todos.filter(todo => todo.active)} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} handleClearCompletedTodo={handleClearCompletedTodo} itemsLeft={todos.filter(todo => !todo.completed).length}/>

        : <TodosList theme={theme} todos={todos.filter(todo => todo.completed)} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} handleClearCompletedTodo={handleClearCompletedTodo} itemsLeft={todos.filter(todo => !todo.completed).length}/>
      }

      <TodosFilters theme={theme} filterTodo={filterTodo} setFilterTodo={setFilterTodo} handleChangeFilter={handleChangeFilter}/>

    </main>

  )
}

export default App
