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
import PendingRequests from "../Pages/Dashboard/PendingRequests/PendingRequests";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import BeAvolunteer from "../Pages/Dashboard/BeAvolunteer/BeAvolunteer";
import PendingVolunteers from "../Pages/Dashboard/PendingVolunteers/PendingVolunteers";
import Forbidden from "../Pages/Forbidden/Forbidden";
import AdminRoute from "../routes/AdminRoute";
import ActiveVolunteers from "../Pages/Dashboard/ActiveVolunteers/ActiveVolunteers";
import AddNewCampaign from "../Pages/Dashboard/AddNewCampaign/AddNewCampaign";
import PendingCampaign from "../Pages/Dashboard/PendingCampaign/PendingCampaign";
import MyCampaigns from "../Pages/Dashboard/MyCampaigns/MyCampaigns";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "get-help",
        element: (
          <PrivetRoute>
            <GetHelp />
          </PrivetRoute>
        )
      },

      { path: "help-other", element: <HelpOther /> },
      { path: "work-process", element: <WorkProcess /> }
    ]
  },
  {
    path: "login",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> }
    ]
  },
  {
    path: "forbidden",
    element: <Forbidden />
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      { index: true, element: <MyBookings /> },
      { path: "pending-requests", element: <PendingRequests /> },
      { path: "be-volunteer", element: <BeAvolunteer /> },
      {
        path: "pending-volunteers",
        element: (
          <AdminRoute>
            <PendingVolunteers />
          </AdminRoute>
        )
      },
      {
        path: 'addNew-campaign',
        element: <AddNewCampaign></AddNewCampaign>
      },
      {
        path: 'active-volunteers',
        element: (
          <AdminRoute>
            <ActiveVolunteers />
          </AdminRoute>
        )

      },
      {
        path: 'pending-campaigns',
        element: (
          <AdminRoute>
            <PendingCampaign />
          </AdminRoute>
        )
      },
      { path: 'my-campaigns', element: <MyCampaigns></MyCampaigns> }

    ]
  }
]);
