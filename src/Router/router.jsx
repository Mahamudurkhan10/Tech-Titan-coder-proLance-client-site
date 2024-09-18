import {
     createBrowserRouter,
     RouterProvider,
   } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Main/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
 export  const router = createBrowserRouter([
     {
       path: "/",
       element: <Main></Main>,
       children:[
          {
               path:'/',
               element: <Home></Home>
          },
          {
            path:'/login',
            element:<Login></Login>
          },{
            path:'/signUp',
            element:<SignUp></SignUp>
          }
       ]

     },
   ]);