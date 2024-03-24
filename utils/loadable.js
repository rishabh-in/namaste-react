import React, { Suspense, lazy } from "react";

const loadable = (importFunc, options) => {
  const {fallback = null} = options || {};
  const LazyComponent = lazy(importFunc);
  
  // Return  a functional component not JSX
  return () => (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  )
}

export default loadable;