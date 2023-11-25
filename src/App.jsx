function App() {


  return (
    <main className="main_container">
      <header className="head_container ">
        <div className="nav_container">
          <h1>TODO</h1>
          <img src="../public/images/icon-moon.svg" alt="icon" />
        </div>
          <form action="submit">
            

            <input type="text" placeholder="Create a new todo..." />
           
          </form>
      </header>

      <section className="list-container">
        <ul>
          <li>
            <span className="circle_item"></span>
            Complete online Javascript course

              <img src="../public/images/icon-cross.svg" alt="" />

          </li>
          <li>
          <span className="circle_item"></span>
            Jog aound the park 3x

              <img src="../public/images/icon-cross.svg" alt="" />

          </li>
          <li>
          <span className="circle_item"></span>
            Read for 1 hour
              <img src="../public/images/icon-cross.svg" alt="" />

          </li>

          <li>
          <span className="circle_item"></span>
            Pick up groceries
              <img src="../public/images/icon-cross.svg" alt="" />

          </li>

          <li>
          <span className="circle_item"></span>
            Complete Todo App on Frontend Mentor
              <img src="../public/images/icon-cross.svg" alt="" />

          </li>

        </ul>
        <div className="status_container">
          <span>5 items left</span>
          <span>Clear Completed</span>
        </div>
      </section>


      <footer>
        <div className="btn-container">
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
