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
        element: <Lesson></Lesson>,
        loader: ({ params }) => fetch(`/word.json/${params.lesson_no}`),
      },

      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
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
