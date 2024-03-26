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
          <Link to="/about">About</Link>
        </nav>
        <div className='container'>
          <FlashCards />
        </div>
      </div>
    </>
  )
}

export default App
