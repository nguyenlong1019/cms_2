import React, { useContext } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/authContext'


const LayoutStaff = () => {
    const {currentUser, logout} = useContext(AuthContext);
    const location = useLocation();



  return (
    <div className='common-layout'>
        <nav className='sidebar'>
            <ul>
                <li>
                    <Link>
                        <i class="fa-solid fa-user"></i>
                        admin
                    </Link>
                </li>
                <li>
                    <Link>
                        <i class="fa-solid fa-gauge"></i>
                        Dashboard 
                    </Link>
                </li>
                <li>
                    <Link>
                        TKB Giảng dạy
                    </Link>
                </li>
                <li>
                    <Link>
                        Lịch sử phòng học 
                    </Link>
                </li>
                <li>
                    <Link onClick={logout}>Đăng xuất</Link>
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