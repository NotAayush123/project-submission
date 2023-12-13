import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Login from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
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
]);
function App() {
  return (
    <>
      <MantineProvider>
        {" "}
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
