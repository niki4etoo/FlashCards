import {
  Link 
} from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <div>
        <nav>
          <Link to="/lists">Lists</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
        </nav>
      Flash cards for learning
      </div>
    </>
  )
}

export default App
