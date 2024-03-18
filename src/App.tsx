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
        <div>
          Flash cards for learning
        </div>

        <div className='flashcard'>
          <div id='flashcard-header'>
            仕事
          </div>
          <div id='flashcard-description'>
            し ご と ( shigoto )
          </div>
        </div>
      </div>
    </>
  )
}

export default App
