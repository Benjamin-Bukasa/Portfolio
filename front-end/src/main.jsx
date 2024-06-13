import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/twitter',
    element:"",
  },
  {
    path:'/facebook',
    element:"",
  },
  {
    path:'/linkedin',
    element:"",
  },
  {
    path:'/gmail',
    element:"",
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
