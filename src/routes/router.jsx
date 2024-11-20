import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home";
import StartLearning from "../pages/StartLearning";
import Tutorials from "../pages/Tutorials";
import About from "../pages/About";
import Profile from "../components/Profile";
import Login from "../components/Login";
import Register from "../components/Register";
import Lesson from "../components/Lesson";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/startlearning",
        element: <StartLearning></StartLearning>,
      },
      {
        path: "/startlearning/:lesson_no",
        element: (
          <PrivateRouter>
            <Lesson></Lesson>
          </PrivateRouter>
        ),
        loader: ({ params }) => fetch(`/word.json`),
      },

      {
        path: "/tutorials",
        element: (
          <PrivateRouter>
            <Tutorials></Tutorials>
          </PrivateRouter>
        ),
        loader: () => fetch("/tutorials.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
