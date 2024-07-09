import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import AppLayout from "./app-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
