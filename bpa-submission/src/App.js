import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardNavbar from "./components/Dashboard/DashboardNavbar";
import ErrorPage from "./pages/404page";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Events from "./components/Events";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import EventDetail from "./pages/EventDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardNavbar />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "account", element: <Account /> },
      { path: "settings", element: <Settings /> },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "detail",
        element: <EventDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <MantineProvider inherit theme={{ colorScheme: "light" }}>
        {" "}
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
