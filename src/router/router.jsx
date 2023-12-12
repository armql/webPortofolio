import { Navigate, createBrowserRouter } from "react-router-dom";
import {
  LazyLoader,
  NotFound,
  GuestLayout,
  Home,
} from "./routes/global/global";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LazyLoader />}>
        <GuestLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LazyLoader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;
