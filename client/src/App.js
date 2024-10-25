import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import LayoutStaff from './pages/LayoutStaff';
import './style.scss';
import LayoutManager from './pages/LayoutManager';
import StaffLogin from './pages/StaffLogin';
import ManagerLogin from './pages/ManagerLogin';
import StaffDashboard from './pages/staff/StaffDashboard';
import ManagerDashboard from './pages/manager/ManagerDashboard' 
import LoginRequire from './pages/staff/LoginRequire';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/staff',
    element: <LoginRequire>
      <LayoutStaff />
    </LoginRequire>,
    children: [
      {
        path: "",
        element: <StaffDashboard />,
      },
      {
        path: "timetables",
        element: <Outlet />,
      },
      {
        path: "attendance_history",
        element: <Outlet />,
      },
    ],
  },
  {
    path: '/manager',
    element: <LoginRequire>
      <LayoutManager />
    </LoginRequire>,
    children: [
      {
        path: "",
        element: <ManagerDashboard />,
      },
    ],
  },
  {
    path: '/staff/login',
    element: <StaffLogin />,
  },
  {
    path: '/manager/login',
    element: <ManagerLogin />,
  },
]);

const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;