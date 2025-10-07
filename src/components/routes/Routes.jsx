import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../error/Error";
import Home from "../Home";
import Apps from "../Apps";
import Installation from "../Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    hydrateFallbackElement :<p>loading....</p>,
    children:[
        {   
            index:true,
            element: <Home></Home>
        },
        {
            path:'/apps',
            element:<Apps></Apps>
        },
        {
            path:'/installation',
            element:<Installation></Installation>
        }
    ]
  },
  {
    path:'*',
    element:<Error></Error>
  }
]);
