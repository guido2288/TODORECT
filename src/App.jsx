import {  useState } from "react"
import Toogle from "./components/Toogle";

function App() {

  const [theme, setTheme] = useState('dark');

  const toogleTheme = () => {
    setTheme( (current) => (current === 'light' ? 'dark': 'light') );
  };

  return (
    <main className={`main_container ${theme}`}>
      <header className={`head_container ${theme}`} >

        <Toogle theme={theme} toogleTheme={toogleTheme}/>

          <form action="submit">
            

            <input className={`${theme}`} type="text" placeholder="Create a new todo..." />
           
          </form>
      </header>

      <section className={`list-container ${theme}`}>
        <ul>
          <li className={theme}>
            <span className={`circle_item ${theme}`}></span>
            Complete online Javascript course

              <img src="../public/images/icon-cross.svg" alt="" />

          </li>
          <li className={theme}>
          <span className={`circle_item ${theme}`}></span>
            Jog aound the park 3x

              <img src="../public/images/icon-cross.svg" alt="" />

          </li>
          <li className={theme}>
          <span className={`circle_item ${theme}`}></span>
            Read for 1 hour
              <img src="../public/images/icon-cross.svg" alt="" />

          </li>

          <li className={theme}>
          <span className={`circle_item ${theme}`}></span>
            Pick up groceries
              <img src="../public/images/icon-cross.svg" alt="" />

          </li>

          <li className={theme}>
          <span className={`circle_item ${theme}`}></span>
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
