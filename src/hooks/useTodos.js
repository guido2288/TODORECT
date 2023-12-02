import { useState } from "react";
import { RandomId } from "../logic/idGenerator";

export const useTodos = () => {
    const [todos, setTodos] = useState(() => {
      const todosFromStorage = window.localStorage.getItem('todos');
      if(todosFromStorage) return JSON.parse(todosFromStorage);

      return [];
    });

    const submitHandler = (event) => {
        event.preventDefault()
        const newTodo = {
          id: RandomId(),
          title: event.target.addTodo.value,
          active: true,
          completed: false
        }
    
        setTodos([...todos, newTodo]);
        window.localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
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
                active: false,
                completed: true
              }
              newsTodos.push(newTodo)
            }
            
          }else{
            newsTodos.push(element)
          }
    
          setTodos(newsTodos);
          window.localStorage.setItem('todos',JSON.stringify(newsTodos))
        });
    
    };

    const handleDeleteTodo = (todo)=> {

        const newTodos = todos.filter( element => todo.id !== element.id);
    
        setTodos(newTodos);
        window.localStorage.setItem('todos',JSON.stringify(newTodos))
    };

    const handleClearCompletedTodo = () => {
        const newTodos = todos.filter( element => element.completed == false);
    
        setTodos(newTodos)
        window.localStorage.setItem('todos', JSON.stringify(newTodos))
    };
    


    return { todos, setTodos , submitHandler , handleCompleteTodo , handleDeleteTodo , handleClearCompletedTodo}
}