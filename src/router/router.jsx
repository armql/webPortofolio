import { Navigate, createBrowserRouter } from "react-router-dom";
import {
  LazyLoader,
  NotFound,
  GuestLayout,
  Home,
  Projects,
  About,
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
      {
        path: "projects",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LazyLoader />}>
            <About />
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
