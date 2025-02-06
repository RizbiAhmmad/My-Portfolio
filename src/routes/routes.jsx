import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: "skills",
          element: <Skills></Skills>
        }
      ]
    },
  ]);