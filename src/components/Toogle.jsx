
const Toogle = ({theme , toogleTheme}) => {
  return (
    <div className="nav_container">
        <h1>TODO</h1>

        {
            theme === 'light' 
            ? <img src="../public/images/icon-moon.svg" alt="icon" onClick={toogleTheme}/>
            : <img src="../public/images/icon-sun.svg" alt="icon" onClick={toogleTheme}/>
        }
        
    </div>
  )
}

export default Toogle