import {
    createBrowserRouter,
   
  } from "react-router-dom";
 
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Secret from "../Pages/Shared/Secret/Secret";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },

        {
          path: 'menu',
          element: <Menu></Menu>
        },

        {
          path: 'order/:category',
          element: <Order></Order>
        },

        {
          path: 'login',
          element: <Login></Login>
        },

        {
          path: 'signup',
          element: <SignUp></SignUp>
        },

        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ],
     

    },

    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },

        
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },

        {
          path: 'addItem',
          element: <AddItem></AddItem>
        },

        {
          path: 'manageitems',
          element: <ManageItem></ManageItem>
        }


      ]
    }
  ]);