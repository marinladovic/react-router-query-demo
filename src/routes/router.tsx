import { createBrowserRouter } from 'react-router-dom';

import LazyLoad from 'shared/lazy-load';

import AppLayout from 'routes/app-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LazyLoad loader={() => import('features/home')} />
      },
      {
        path: 'second-page',
        element: <LazyLoad loader={() => import('features/second-page')} title="Second Page" />
      }
    ]
  }
]);

export default router;
