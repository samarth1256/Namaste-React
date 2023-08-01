import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


const Grocery=lazy(()=> import("./components/Grocery"));
const About=lazy(()=> import("./components/About"));

const AppLaoyout = () => {
  const [user,setUser]=useState({
    name: "Samarth",
    email:"samarth@gmail.com",
});
    return(
        <div className="app">
        <Provider store={store}>
        <UserContext.Provider
        value={{
          user:user,
          setUser:setUser,
        }}>
        <Header />
        <Outlet />
        </UserContext.Provider>
        </Provider>
            
        </div>
    )
}

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLaoyout/>,
    children: [ {
      path: "/",
      element: <Body />
    },
      {
        path:"/about",
        element: <Suspense fallback={<h1>Loading again...</h1>}><About/></Suspense>,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element: <Cart />
      },

    ],
    errorElement:<Error/>,
  },  
]);

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter}/>);