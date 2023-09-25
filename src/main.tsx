import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Provider} from 'react-redux'
import {store} from './redux/store'
import Login from "./pages/login"
import Register from "./pages/register"
import Perfil from "./pages/perfil"
import './index.css'
import App from './App'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"perfil",
        element:<Perfil/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
