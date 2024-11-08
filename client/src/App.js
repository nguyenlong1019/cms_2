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
import Classroom from './pages/manager/Classroom';
import ManagerSchedule from './pages/manager/ManagerSchedule';
import ExamSchedule from './pages/manager/ExamSchedule';
import SubjectRegister from './pages/manager/SubjectRegister';
import LearningResult from './pages/manager/LearningResult';
import ManagerTimeTable from './pages/manager/ManagerTimeTable';
import ManagerAttendanceHist from './pages/manager/ManagerAttendanceHist';
import GradeManager from './pages/manager/GradeManager';

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
        path: "attendance-history",
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
        element: <ManagerSchedule />,
      },
      {
        path: "timetables/add",
        element: <ManagerSchedule />,
      },
      {
        path: "timetables/edit/:Id",
        element: <ManagerSchedule />,
      },
      {
        path: "exam-schedule",
        element: <ExamSchedule />,
      },
      {
        path: "exam-schedule/add",
        element: <ExamSchedule />,
      },
      {
        path: "exam-schedule/edit/:Id",
        element: <ExamSchedule />,
      },
      {
        path: "student-enrollments",
        element: <SubjectRegister />,
      },
      {
        path: "student-enrollments/add",
        element: <SubjectRegister />,
      },
      {
        path: "student-enrollments/edit/:Id",
        element: <SubjectRegister />,
      },
      {
        path: "classroom", // Danh sach lop hoc phan 
        element: <Classroom />,
      },
      {
        path: "classroom/add", // Danh sach lop hoc phan 
        element: <Classroom />,
      },
      {
        path: "classroom/edit/:Id", // Danh sach lop hoc phan 
        element: <Classroom />,
      },
      {
        path: "learning-result",
        element: <LearningResult />,
      },
      {
        path: "learning-result/add",
        element: <LearningResult />,
      },
      {
        path: "learning-result/edit/:Id",
        element: <LearningResult />,
      },
      {
        path: "teacher-timetables",
        element: <ManagerTimeTable />,
      },
      {
        path: "teacher-timetables/add",
        element: <ManagerTimeTable />,
      },
      {
        path: "teacher-timetables/edit/:Id",
        element: <ManagerTimeTable />,
      },
      {
        path: "attendance-hist",
        element: <ManagerAttendanceHist />,
      },
      {
        path: "attendance-hist/add",
        element: <ManagerAttendanceHist />,
      },
      {
        path: "attendance-hist/edit/:Id",
        element: <ManagerAttendanceHist />,
      },
      {
        path: "score",
        element: <GradeManager />,
      },
      {
        path: "score/add",
        element: <GradeManager />,
      },
      {
        path: "score/edit/:Id",
        element: <GradeManager />,
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