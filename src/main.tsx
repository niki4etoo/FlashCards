import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import FlashCards from './components/FlashCards'
import Lists from './components/Lists'
import About from './components/About'
import Login from './components/Login'
import Registration from './components/Registration'

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
    },
    {
      path: '/lists',
      element: <Lists />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/registration',
      element: <Registration />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
