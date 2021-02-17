import React, { lazy, Suspense } from 'react';

const LazyOpenSource = lazy(() => import('./OpenSource'));

const OpenSource = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyOpenSource {...props} />
  </Suspense>
);

export default OpenSource;
