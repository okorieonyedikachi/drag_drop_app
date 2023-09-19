import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider} from "react-router-dom";
import SignUp from './Routes/SignUp.tsx';
import LoginPage from './Routes/LoginPage.tsx';
import Homepage from './Routes/Homepage.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  }, 
  {
    path: "/signIn",
    element: <SignUp/>
  },
  {
    path:"/Homepage",
    element:<Homepage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

