import {
  Link
} from 'react-router-dom'

import './App.css'
import { useState } from 'react';

function App() {

  let [isFlip, setIsFlip] = useState(false);

  const handleClick = () => {
    setIsFlip(isFlip = !isFlip);
  }

  return (
    <>
      <div className='container'>
        <nav>
          <Link to="/lists">Lists</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
        </nav>
        <div className='flashcard' onClick={handleClick}>
          {isFlip &&
            <div className='flashcard-back'>
              <div id='flashcard-header'>
                仕事 - working, labor, occupation
              </div>
              <div id='flashcard-description'>
                し ご と ( shigoto )
              </div>
            </div>
          }
          {
            !isFlip &&
            <div className='flashcard-front'>
              <div id='flashcard-header'>
                仕事
              </div>
              <div id='flashcard-description'>
                し ご と ( shigoto )
              </div>
            </div>
          }



        </div>
      </div>
    </>
  )
}

export default App
