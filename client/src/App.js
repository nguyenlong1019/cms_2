import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import LayoutStaff from './pages/LayoutStaff';
import './style.scss';
import LayoutManager from './pages/LayoutManager';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/staff',
    element: <LayoutStaff />,
    children: [
      {
        path: "",
        element: <Outlet />,
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
    element: <LayoutManager />,
    children: [

    ],
  },
  {
    path: '/staff/login',
    element: <Outlet />,
  },
  {
    path: '/manager/login',
    element: <Outlet />,
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