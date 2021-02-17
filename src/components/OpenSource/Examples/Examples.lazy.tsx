import React, { lazy, Suspense } from 'react';

const LazyExamples = lazy(() => import('./Examples'));

const Examples = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExamples {...props} />
  </Suspense>
);

export default Examples;
