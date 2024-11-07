import React, { useContext } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const LayoutManager = () => {
    const {currentUser, logout} = useContext(AuthContext);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

  return (
    <div className='common-layout'>
        <nav className="sidebar">
            <ul>
                <li>
                    <Link>
                        <i className="fa-solid fa-user"></i>
                        {currentUser.username} - {currentUser.role}
                    </Link>
                </li>
                <li className={isActive("/manager")}>
                    <Link to="/manager">
                        <i className="fa-solid fa-gauge"></i>
                        Dashboard
                    </Link>
                </li>
                <li className={isActive("/manager/timetables")}>
                    <Link to="/manager/timetables">
                        <i className="fa-solid fa-calendar-days"></i>
                        Thời khóa biểu
                    </Link>
                </li>
                <li className={isActive("/manager/")}>
                    <Link>
                        <i className="fa-solid fa-subscript"></i>
                        Lịch thi
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="fa-solid fa-right-to-bracket"></i>
                        Đăng ký HP SV
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="fa-solid fa-users"></i>
                        Danh sách lớp HP 
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="fa-solid fa-square-poll-vertical"></i>
                        Kết quả học tập
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="fa-solid fa-calendar-days"></i>
                        TKB Giảng dạy
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="fa-solid fa-clock-rotate-left"></i>
                        Lịch sử phòng học
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="fa-solid fa-star"></i>
                        Quản lý điểm HP 
                    </Link>
                </li>
                <li>
                    <Link onClick={logout}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        Đăng xuất
                    </Link>
                </li>
            </ul>
        </nav>
        <div className="content">
            <Outlet />
        </div>
    </div>
  )
}

export default LayoutManager