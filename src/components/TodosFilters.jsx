
const TodosFilters = ({theme , filterTodo , setFilterTodo , handleChangeFilter }) => {
  return (
    <footer>
      <div className={`btn-container ${theme}`}>
        {
          filterTodo == 'all' ? <span style={{color:"hsl(220, 98%, 61%"}}>All</span> : <span onClick={()=> handleChangeFilter('all')}>All</span>
        }
        {
          filterTodo == 'active' ? <span style={{color:"hsl(220, 98%, 61%"}}>Active</span> : <span onClick={()=> handleChangeFilter('active')}>Active</span>
        }
        {
          filterTodo == 'completed' ? <span style={{color:"hsl(220, 98%, 61%"}}>Completed</span> : <span onClick={()=> handleChangeFilter('completed')}>Completed</span>
        }
    </div>
    <p>Drag and drop to reorder list</p>
  </footer>
  )
}

export default TodosFilters