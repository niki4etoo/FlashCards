import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import FlashCards from './components/FlashCards'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/flashcards',
      element: <FlashCards />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
