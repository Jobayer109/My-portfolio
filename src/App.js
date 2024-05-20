import Aos from "aos";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/routes";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
