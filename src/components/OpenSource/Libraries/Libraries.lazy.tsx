import React, { lazy, Suspense } from 'react';

const LazyLibraries = lazy(() => import('./Libraries'));

const Libraries = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLibraries {...props} />
  </Suspense>
);

export default Libraries;
