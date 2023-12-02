const TodosList = ({theme , todos , handleCompleteTodo , handleDeleteTodo , handleClearCompletedTodo , itemsLeft }) => {

  return (
    <section className={`list-container ${theme}`}>

      {
          <ul>
              {
                todos.map(todo => {
                  return (
                    <li key={todo.id} className={`${todo.completed ? "completed" : "" } ${theme}`}>
                      <span className={`circle_item ${theme} ${todo.completed ? "completed" : "" }`} onClick={() => handleCompleteTodo(todo)}></span>
                        {todo.title}
                      <img src="/images/icon-cross.svg" alt="" onClick={() => handleDeleteTodo(todo)}/>
                    </li>
                  )
                })
              } 
            </ul>

      }

    <div className="status_container">
      <span>{`${itemsLeft} items left`}</span>
      <span onClick={() => handleClearCompletedTodo()}>Clear Completed</span>
    </div>
  </section>
  )
}

export default TodosList