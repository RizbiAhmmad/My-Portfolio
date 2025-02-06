import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Education from "../Pages/Education/Education";
import Project1Details from "../Pages/Projects/Project1Details";
import Project2Details from "../Pages/Projects/Project2Details";
import Project3Details from "../Pages/Projects/Project3Details";

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
        },
        {
          path: "education",
          element: <Education></Education>
        }
      ]
    },
    {
      path: "/project1-details",
      element: <Project1Details></Project1Details>
    },
    {
      path: "/project2-details",
      element: <Project2Details></Project2Details>
    },
    {
      path: "/project3-details",
      element: <Project3Details></Project3Details>
    }

  ]);