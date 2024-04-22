import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../Pages/Home'
import Form from '../Pages/Form'
import RootLayout from '../Pages/RootLayout'
import Error from '../Pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/Dynamic/',
        element: <HomePage />
      },
      {
        path: '/Dynamic/form-page',
        element: <Form />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
