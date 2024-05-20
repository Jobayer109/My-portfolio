import Main from "../Layout/Main";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import ContributionDetails from "../components/Home/Contributions/ContributionDetails";
import Contributions from "../components/Home/Contributions/Contributions";
import Home from "../components/Home/Home";
import ProjectDetails from "../components/Home/Projects/ProjectDetails";
import Projects from "../components/Home/Projects/Projects";
import Skills from "../components/Home/Skills";
import ErrorPage from "../components/shared/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contributions",
        element: <Contributions />,
      },

      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "project/:id",
        element: <ProjectDetails />,
      },
      {
        path: "contribution/:id",
        element: <ContributionDetails />,
      },
    ],
  },
]);
