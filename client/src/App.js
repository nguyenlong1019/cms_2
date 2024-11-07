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
import LoginRequireManager from './pages/manager/LoginRequireManager';
import StaffTimeTable from './pages/staff/StaffTimeTable';
import StaffAttendanceHist from './pages/staff/StaffAttendanceHist';

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
        element: <StaffTimeTable />,
      },
      {
        path: "attendance_history",
        element: <StaffAttendanceHist />,
      },
    ],
  },
  {
    path: '/manager',
    element: <LoginRequireManager>
      <LayoutManager />
    </LoginRequireManager>,
    children: [
      {
        path: "",
        element: <ManagerDashboard />,
      },
      {
        path: "timetables",
        element: <ManagerDashboard />,
      },
      {
        path: "timetables/add",
        element: <ManagerDashboard />,
      },
      {
        path: "timetables/edit/:Id",
        element: <ManagerDashboard />,
      },
      {
        path: "exam-schedule",
        element: <ManagerDashboard />,
      },
      {
        path: "exam-schedule/add",
        element: <ManagerDashboard />,
      },
      {
        path: "exam-schedule/edit/:Id",
        element: <ManagerDashboard />,
      },
      {
        path: "student-enrollments",
        element: <ManagerDashboard />,
      },
      {
        path: "student-enrollments/add",
        element: <ManagerDashboard />,
      },
      {
        path: "student-enrollments/edit/:Id",
        element: <ManagerDashboard />,
      },
      {
        path: "classroom", // Danh sach lop hoc phan 
        element: <ManagerDashboard />,
      },
      {
        path: "classroom/add", // Danh sach lop hoc phan 
        element: <ManagerDashboard />,
      },
      {
        path: "classroom/edit/:Id", // Danh sach lop hoc phan 
        element: <ManagerDashboard />,
      },
      {
        path: "exam-schedule",
        element: <ManagerDashboard />,
      },
      {
        path: "exam-schedule/add",
        element: <ManagerDashboard />,
      },
      {
        path: "exam-schedule/edit:Id",
        element: <ManagerDashboard />,
      },
      {
        path: "learning-result",
        element: <ManagerDashboard />,
      },
      {
        path: "learning-result/add",
        element: <ManagerDashboard />,
      },
      {
        path: "learning-result/edit/:Id",
        element: <ManagerDashboard />,
      },
      {
        path: "teacher-timetables",
        element: <ManagerDashboard />,
      },
      {
        path: "teacher-timetables/add",
        element: <ManagerDashboard />,
      },
      {
        path: "teacher-timetables/edit/:Id",
        element: <ManagerDashboard />,
      },
      {
        path: "attendance-hist",
        element: <ManagerDashboard />,
      },
      {
        path: "attendance-hist/add",
        element: <ManagerDashboard />,
      },
      {
        path: "attendance-hist/edit/:Id",
        element: <ManagerDashboard />,
      },
      {
        path: "score",
        element: <ManagerDashboard />,
      },
      {
        path: "score/add",
        element: <ManagerDashboard />,
      },
      {
        path: "score/edit/:Id",
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