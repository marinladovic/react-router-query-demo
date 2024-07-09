import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Outlet />
  </Suspense>
);

export default AppLayout;
