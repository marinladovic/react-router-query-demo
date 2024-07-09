import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./app-layout";
import LazyLoad from "../shared/lazy-load";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LazyLoad loader={() => import("../features/home")} />,
      },
      {
        path: "second-page",
        element: (
          <LazyLoad
            loader={() => import("../features/second-page")}
            title="Second Page"
          />
        ),
      },
    ],
  },
]);

export default router;
