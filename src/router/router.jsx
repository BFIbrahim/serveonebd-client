import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import GetHelp from "../Pages/GetHelp/GetHelp/GetHelp";
import HelpOther from "../Pages/HelpOther/HelpOther/HelpOther";
import WorkProcess from "../Pages/HowItWorks/WorkProcess";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivetRoute from "../routes/PrivetRoute";
import DashboardLayout from "../Layouts/DashboardLayout";

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
        },
        {
          path: 'help-other',
          Component: HelpOther
        },
        {
          path: 'work-process',
          Component: WorkProcess
        }
    ]
  },
  {
    path: 'login',
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivetRoute>
      <DashboardLayout></DashboardLayout>
    </PrivetRoute>,
    children: [
      
    ]
  }
]);