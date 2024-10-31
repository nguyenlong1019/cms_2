import React, { useContext } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/authContext'


const LayoutStaff = () => {
    const {currentUser, logout} = useContext(AuthContext);
    const location = useLocation();

    // console.log(currentUser);
    
    


  return (
    <div className='common-layout'>
        <nav className='sidebar'>
            <ul>
                <li>
                    <Link>
                        <i className="fa-solid fa-user"></i>
                        {currentUser.username} - {currentUser.role}
                    </Link>
                </li>
                <li className='active'>
                    <Link>
                        <i className="fa-solid fa-gauge"></i>
                        Dashboard 
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

export default LayoutStaff