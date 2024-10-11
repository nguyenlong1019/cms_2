import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './components/Footer';
import Account from './pages/Account';
import Student from './pages/Student';
import ExamSchedule from './pages/ExamSchedule';
import RegisterSubject from './pages/RegisterSubject';
import Schedule from './pages/Schedule';
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
        element: <Student />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/students",
        element: <Student />,
      },
      {
        path: "/exam-schedule",
        element: <ExamSchedule />,
      },
      {
        path: "/register-subject",
        element: <RegisterSubject />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
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