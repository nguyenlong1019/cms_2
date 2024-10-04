import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './components/Footer';
import Account from './pages/Account';
import './style.scss';

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
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