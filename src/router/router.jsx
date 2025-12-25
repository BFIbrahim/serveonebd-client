import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import GetHelp from "../Pages/GetHelp/GetHelp/GetHelp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: 'get-help',
          Component: GetHelp
        }
    ]
  },
]);