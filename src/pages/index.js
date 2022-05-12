import React, { lazy, Suspense } from "react";
import LazyFallback from "../component/elements/LazyFallback";

const Suspensed = (Element) =>
  function suspense(props) {
    return (
      <Suspense fallback={<LazyFallback />}>
        <Element {...props} />
      </Suspense>
    );
  };

export default {
  Login: Suspensed(lazy(() => import("./Login"))),
  Error404: Suspensed(lazy(() => import("./NotFound"))),
  Register: Suspensed(lazy(() => import("./Register"))),
};
