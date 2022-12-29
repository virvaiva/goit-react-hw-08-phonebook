import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div style={{ minWidth: 960 }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
