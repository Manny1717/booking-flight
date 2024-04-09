import { RouteObject } from "react-router";
import Layout from "../layout/Layout.js";
import Home from "../pages/Home/Home.js";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        children: [{ path: "", element: <Home /> }],
      },
    ],
  },
];

export default Routes;
