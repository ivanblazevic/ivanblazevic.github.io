import React, { lazy, Suspense } from 'react';

const LazyMainBox = lazy(() => import('./MainBox'));

const MainBox = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMainBox {...props} />
  </Suspense>
);

export default MainBox;
