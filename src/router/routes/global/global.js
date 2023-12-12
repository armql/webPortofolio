import { lazy } from "react";

import LazyLoader from "../loader/LazyLoader";
const NotFound = lazy(() => import("../../../layouts/NotFound/NotFound"));
export { NotFound, LazyLoader };
