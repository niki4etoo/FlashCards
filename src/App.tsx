import {
  Link
} from 'react-router-dom'

import './App.css'
import FlashCards from './components/FlashCards';

function App() {
  return (
    <>
      <div className='container'>
        <nav>
          <Link to="/lists">Lists</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
        </nav>
        <FlashCards />
      </div>
    </>
  )
}

export default App
