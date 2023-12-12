import { createBrowserRouter } from "react-router-dom";
import { LazyLoader, NotFound } from "./routes/global/global";
import { Suspense } from "react";

const router = createBrowserRouter([
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
