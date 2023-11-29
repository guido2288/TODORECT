
const TodosFilters = ({theme , filterTodo , setFilterTodo}) => {
  return (
    <footer>
      <div className={`btn-container ${theme}`}>
        {
          filterTodo == 'all' ? <span style={{color:"hsl(220, 98%, 61%"}}>All</span> : <span>All</span>
        }
        {
          filterTodo == 'active' ? <span style={{color:"hsl(220, 98%, 61%"}}>Active</span> : <span>Active</span>
        }
        {
          filterTodo == 'completed' ? <span style={{color:"hsl(220, 98%, 61%"}}>Completed</span> : <span>Completed</span>
        }
    </div>
    <p>Drag and drop to reorder list</p>
  </footer>
  )
}

export default TodosFilters