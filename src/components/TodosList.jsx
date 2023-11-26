const TodosList = ({theme , todos}) => {
  return (
    <section className={`list-container ${theme}`}>
      <ul>
        {
          todos.map(todo => {
            return (
              <li key={todo.id} className={theme}>
                <span className={`circle_item ${theme}`}></span>
                {todo.title}
                <img src="../public/images/icon-cross.svg" alt="" />
              </li>
            )
          })
        }
      </ul>
    
    <div className="status_container">
      <span>{todos.length} items left</span>
      <span>Clear Completed</span>
    </div>
  </section>
  )
}

export default TodosList