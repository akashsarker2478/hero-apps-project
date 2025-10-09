import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../error/Error";
import Home from "../Home";
import Apps from "../Apps";
import Installation from "../Installation";
import AppsDetails from "../AppsDetails";
import RouteLoading from "../routeLoading/RouteLoading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    hydrateFallbackElement :<p>loading....</p>,
    children:[
        {   
            index:true,
            element: (
              <RouteLoading>
                <Home></Home>
              </RouteLoading>
            ),
        },
        {
            path:'/apps',
            element:(
              <RouteLoading>
                <Apps></Apps>
              </RouteLoading>
            )
        },
        {
            path:'/installation',
            element:(
              <RouteLoading>
                <Installation></Installation>
              </RouteLoading>
            )
        },
        {
          path:'/apps/:id',
          element: (
            <RouteLoading>
              <AppsDetails></AppsDetails>
            </RouteLoading>
          )
        }
    ]
  },
  {
    path:'*',
    element:<Error></Error>
  }
]);
