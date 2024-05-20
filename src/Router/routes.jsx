import Main from "../Layout/Main";
import Home from "../components/Home/Home";
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
      //   {
      //     path: "contact",
      //     element: <Contact />,
      //   },
      //   {
      //     path: "about",
      //     element: <About />,
      //   },
      //   {
      //     path: "projects",
      //     element: <Projects />,
      //   },
      //   {
      //     path: "contributions",
      //     element: <Contributions />,
      //   },

      //   {
      //     path: "skills",
      //     element: <Skills />,
      //   },
      //   {
      //     path: "project/:id",
      //     element: <ProjectDetails />,
      //   },
      //   {
      //     path: "contribution/:id",
      //     element: <ContributionDetails />,
      //   },
    ],
  },
]);
